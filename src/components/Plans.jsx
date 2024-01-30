import plans from "../data/plans";
import { useFormContext } from "../context/FormContext";

export function Plans() {
    const { selectedStep, selectedPlanId, setSelectedPlanId, billingType, setBillingType
    } = useFormContext();

    function handleBillingButton() {
        billingType === "monthly" ? setBillingType("yearly") : setBillingType("monthly");
    }
    const billingPrices = billingType === "monthly" ? "monthlyPrice" : "yearlyPrice";
    return (
        <>
            <div className={`bg-white absolute -top-[7rem] md:-top-[6rem] left-1/2 -translate-x-1/2 shadow w-[90%] max-w-[500px] md:max-w-[580px] mx-auto px-8 py-6 ${selectedStep !== 2 && "hidden"} lg:relative lg:top-0 lg:m-0 lg:p-0 lg:w-full lg:max-w-[100%] lg:shadow-none `}>
                    <div className="lg:mb-8">
                        <h2 className="text-2xl lg:text-4xl text-marineBlue font-bold">Select your plan</h2>
                        <p className="mt-3 mb-6">You have the option of monthly or yearly billing.</p>

                    </div>
                    <div className={`flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between`}>
                    {
                        plans.map(plan => <button type="button" key={plan.id} className={`flex gap-4 items-start border-[1px] border-lightGray p-4 ${billingType === "yearly" && "sm:p-[10px]"} md:p-4 rounded-lg ${plan.id === selectedPlanId && " border-purplishBlue bg-magnolia"} lg:flex-col lg:justify-between lg:item lg:gap-10`}  onClick={() => setSelectedPlanId(prevId => prevId === plan.id? prevId: plan.id)}>
                            <span className="lg:mr-20"><img src={plan.icon} alt={`${plan.title} icon`}/></span>
                            <span className={`text-left`}>
                                <span className="text-marineBlue text-base font-semibold">{plan.title}</span>
                                <span>${plan[billingPrices]}{billingType === "monthly"? "/mo" :"/yr"}</span>
                                {billingType === "yearly" && <span className="text-marineBlue">2 months free</span>}
                            </span>
                        </button>)
                    }
                    </div>
                    <div className={`flex gap-4 justify-center bg-alabaster px-4 py-2 mt-4 lg:mt-8 lg:gap-8`}>
                        <p className={`${billingType=== "monthly" && "text-marineBlue font-semibold transition duration-300"}`}>Monthly</p> 
                        <button className={`relative bg-marineBlue w-12 h-6 rounded-full cursor-pointer p-[0.2rem]`} onClick={handleBillingButton} type="button">
                            <span className={`w-[37.5%] h-[75%] rounded-full bg-white absolute ${billingType === "monthly"? "left-1" : "right-1"} top-[0.19rem] transition duration-[5000ms]`}></span>
                        </button>
                        <p className={`${billingType=== "yearly" && "text-marineBlue font-semibold transition duration-300"}`}>Yearly</p>
                    </div>
                </div>
        </>
    );
}