import plans from "../data/plans";
import addons from "../data/addons";
import { useState } from "react";
import { useFormContext } from "../context/FormContext.jsx";
import { Plans } from "./Plans.jsx";
import { Addons } from "./Addons.jsx";
import { PersonalInfo } from "./PersonalInfo.jsx";


function SubscriptionForm () {
    const { 
        selectedStep, setSelectedStep, selectedPlanId, selectedAddonsIds, billingType, 
        setPersonalInfo, validEmail, validName, validPhone
      } = useFormContext();
      
    const [submitSuccess, setSubmitSuccess] = useState(false);
    
    const selectedPlan = plans.find((plan) => plan.id === selectedPlanId) || plans[0];

    let selectedAddons = selectedAddonsIds.map((selectedAddonId) =>
    addons.find((addon) => addon.id === selectedAddonId)
);
    const billingPrices = billingType === "monthly" ? "monthlyPrice" : "yearlyPrice";
    let total = 0;
    total += selectedPlan[billingPrices];
    selectedAddonsIds.forEach((selectedAddonId) => {
        const selectedAddon = addons.find((addon) => addon.id === selectedAddonId);
        total += selectedAddon ? selectedAddon[billingPrices] : 0;
    });

function handleSubmitForm(e) {
    e.preventDefault();
    if(validEmail && validName && validPhone) {
        /*form submission logic*/
        setSubmitSuccess(true);
    }
    //Clear fields after submission
    setPersonalInfo({name: "", email: "", phone: ""});
}
    return (
        <>
       <section className="sm:h-screen lg:h-auto lg:mw-1/2 flex flex-col sm:items-stretch lg:flex-row lg:justify-between lg:w-[80%] lg:max-w-[1000px] lg:mx-auto lg:bg-white lg:rounded-xl lg:p-4 lg:shadow-lg lg:align-middle">

        {/* sidebar */}
            <aside className="sm:h-[27%] sm:w-full lg:h-auto bgSidebarSM lg:bgSidebar lg:w-[27%] lg:rounded-lg lg:pl-4">
                <div className="flex gap-8 md:gap-10 justify-center px-8 pt-4 pb-36 md:pt-10 lg:flex-col lg:gap-4 lg:items-start lg:px-4 lg:py-8">
                    <div className={`flex items-center gap-4`}>
                        <button onClick={() => validEmail && validName && validPhone ? setSelectedStep(prev => prev === 1? prev : 1): setSelectedStep(prev => prev)} className={`flex items-center justify-center h-6 w-6 p-4 rounded-full border-2 border-lightBlue text-lightBlue ${selectedStep === 1 && "bg-lightBlue text-marineBlue"}`}>1</button>
                        <div className="sm:hidden lg:inline-block">
                            <p>STEP 1</p>
                            <p className="text-white font-[400]">YOUR INFO</p>
                        </div>
                    </div>
                    <div className={`flex items-center gap-4`}>
                        <button onClick={() => validEmail && validName && validPhone ? setSelectedStep(prev => prev === 2? prev : 2): setSelectedStep(prev => prev)} className={`flex items-center justify-center h-6 w-6 p-4 rounded-full border-2 border-lightBlue text-lightBlue ${selectedStep === 2 && "bg-lightBlue text-marineBlue"}`}>2</button>
                        <div className="sm:hidden lg:inline-block">
                            <p>STEP 2</p>
                            <p className="text-white font-[400]">SELECT PLAN</p>
                        </div>
                    </div>
                    <div className={`flex items-center gap-4`}>
                        <button onClick={() => validEmail && validName && validPhone ? setSelectedStep(prev => prev === 3? prev : 3): setSelectedStep(prev => prev)} className={`flex items-center justify-center h-6 w-6 p-4 rounded-full border-2 border-lightBlue text-lightBlue ${selectedStep === 3 && "bg-lightBlue text-marineBlue"}`}>3</button>
                        <div className="sm:hidden lg:inline-block">
                            <p>STEP 3</p>
                            <p className="text-white font-[400]">ADD-ONS</p>
                        </div>
                    </div>
                    <div className={`flex items-center gap-4`}>
                        <button onClick={() => validEmail && validName && validPhone ? setSelectedStep(prev => prev === 4? prev : 4): setSelectedStep(prev => prev)} className={`flex items-center justify-center h-6 w-6 p-4 rounded-full border-2 border-lightBlue text-lightBlue ${selectedStep === 4 && "bg-lightBlue text-marineBlue"}`}>4</button>
                        <div className="sm:hidden lg:inline-block">
                            <p>STEP 4</p>
                            <p className="text-white font-[400]">SUMMARY</p>
                        </div>
                    </div>
                </div>
            </aside>
        
            {/* main */}
            <main className="sm:h-[73%] sm:w-full lg:h-auto relative lg:flex lg:items-center lg:justify-center lg:pt-6 lg:pb-0  lg:w-[73%] lg:bg-white ">
                
                {!submitSuccess &&
                <form onSubmit={handleSubmitForm} className="sm:h-[100%] relative flex flex-col gap-6 lg:justify-between lg:gap-20 lg:mx-auto lg:max-w-[75%] lg:flex-1 ">
                {/* Step 1: Personal info */}
                <PersonalInfo />

                {/* step 2: plans */}
                <Plans />

                {/* step 3: addons */}
                <Addons />
                
                {/* Step 4: summary */}
                <div className={`bg-white absolute -top-[7rem] md:-top-[6rem] left-1/2 -translate-x-1/2 shadow w-[90%] max-w-[500px] md:max-w-[580px] mx-auto px-8 py-6 ${selectedStep !== 4 && "hidden"} lg:relative lg:top-0 lg:m-0 lg:p-0 lg:w-full lg:max-w-[100%] lg:shadow-none `}>
                    <div className="lg:mb-8">
                        <h1 className="text-2xl lg:text-4xl text-marineBlue font-bold"> Finishing up</h1>
                        <p className="mt-3 mb-6">Double-check everything looks OK before confirming.</p>

                    </div>

                    <div>

                        <div className="bg-alabaster p-4 rounded-md lg:p-6">
                            
                        {/* selected plan */}
                        <div className={`flex justify-between items-center gap-4`}>
                            <div>
                                <p className="text-marineBlue text-lg font-semibold capitalize">{selectedPlan.title} ({billingType})</p>
                                <button type="button" className="text-coolGray underline hover:text-purplishBlue hover text-lg font-medium" onClick={()=> setSelectedStep(2)}>Change</button>
                            </div>
                            <p className="text-marineBlue text-lg font-semibold">${selectedPlan[billingPrices]}{billingType === "monthly" ? "/mo" :"/yr"}</p>
                        </div>
                        <hr className="my-4"/>

                        {/* Selected add-ons */}
                        <div className={`flex flex-col justify-between gap-4 `}>
                            {selectedAddons.map(addon =>(
                            <div className={`flex justify-between items-center gap-4`} key={addon.id}>
                                    <p>{addon.title}</p>
                                    <p className="text-marineBlue">+${addon[billingPrices]}{billingType === "monthly" ? "/mo" : "/yr"}</p>
                            </div>
                            ))}
                        </div>
                        </div>
                        <div className={`flex justify-between items-center gap-4 mt-6 lg:px-6`}>
                            <p >Total (per {`${billingType === "monthly"? "month" : "year"}`})</p>
                            <p className="text-purplishBlue font-bold">+${total}{billingType === "monthly"? "/mo" : "/yr"}</p>
                        </div>

                    </div>
                </div>

                {/* nav buttons */}
                <div className=" bg-white self-end w-full sm:absolute sm:bottom-0 px-5 py-6  lg:p-0 lg:m-0 lg:relative ">
                    <div className="flex justify-between items-center sm:w-full mx-auto  ">
                        {<button type="button" className={`bg-transparent px-4 py-2 text-coolGray rounded-md hover:text-marineBlue ${selectedStep === 1 && "hidden"}`} onClick={() => setSelectedStep(prev => prev - 1)}>Go Back</button>}
                        {<button type="button" className={`ml-auto bg-marineBlue px-4 py-2 text-white rounded-md hover:opacity-90 ${selectedStep === 4 && "hidden"}`} onClick={() => validEmail && validName && validPhone ? setSelectedStep(prevVal => prevVal + 1) : setSelectedStep(prevVal => prevVal)}>Next step</button>}
                        {<button type="submit" className={`bg-purplishBlue px-4 py-2 text-white rounded-md hover:opacity-70 ${selectedStep < 4 && "hidden"}`}>Confirm</button>}
                    </div>
                </div>


            </form>

                }
                {submitSuccess && 
                // Thank you message
                    <div className={`bg-white absolute -top-[7rem] md:-top-[6rem] left-1/2 -translate-x-1/2 shadow w-[90%] max-w-[500px] md:max-w-[580px] mx-auto px-8 py-16 text-center text-balance rounded-md lg:relative lg:top-0 lg:my-0 lg:mr-[25%] lg:w-full lg:max-w-[75%] lg:flex-1  lg:shadow-none lg:px-10 lg:py-32`}>
                        <img src="/assets/icon_thank_you.svg" alt="check mark" className="mx-auto"/>
                        <h1 className="mt-6 mb-3 text-2xl lg:text-4xl text-marineBlue font-bold">Thank you!</h1>
                        <p className="">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
                    </div>
                    }
            </main>
       </section>
        </>
    )
}

export default SubscriptionForm;