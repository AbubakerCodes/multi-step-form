import { useEffect } from "react";
import { useFormContext } from "../context/FormContext"

export function PersonalInfo (props) {
    const { selectedStep, personalInfo, setPersonalInfo, validEmail, validName, validPhone, missingFieldError
    } = useFormContext();

    function handleInputChange(e) {
        const inputName = e.target.name;
        setPersonalInfo(prev => ({...prev, [inputName]: e.target.value}));
    }
    
    let showError = missingFieldError;
    useEffect(()=> {
        showError = missingFieldError;

    }, [missingFieldError])
    return (
        <>
            <div className={`bg-white absolute -top-[7rem] md:-top-[6rem] left-1/2 -translate-x-1/2 shadow w-[90%] max-w-[500px] md:max-w-[580px] mx-auto px-8 py-6 ${selectedStep !== 1 && "hidden"} lg:relative lg:top-0 lg:m-0 lg:p-0 lg:w-full lg:max-w-[100%] lg:shadow-none`}>
                    
                    <div className="lg:mb-8">
                        <h2 className="text-4xl text-marineBlue font-bold">Personal info</h2>
                        <p className="mt-4 mb-6">Please provide your name, email address, and phone number.</p>
                    </div>

                    <div className="lg:relative lg:mb-2">
                        <label className="block text-marineBlue text-[0.9rem] font-medium lg:mb-1" htmlFor="name">Name</label>
                        <input className={`min-w-[100%] mb-4 px-4 py-[10px] border-[1px] border-lightGray  text-marineBlue font-bold outline-none focus:border-purplishBlue rounded-lg ${personalInfo.name && !validName && "border-strawberryRed"}`}
                        onChange={handleInputChange} type="text" name="name" id="name" 
                        autoComplete="off"  aria-invalid={validName ? "false" : "true"} required 
                        value={personalInfo.name} placeholder="e.g. Stephen King"/>
                        {!personalInfo.name && showError && <p className="text-strawberryRed text-opacity-85 font-semibold text-[0.9rem] lg:absolute lg:top-0 lg:right-1">This field is required</p>}
                    </div>

                    <div className="lg:relative lg:mb-2">
                        <label className="block text-marineBlue text-[0.9rem] font-medium lg:mb-1" htmlFor="email">Email Address</label>
                        <input className={`min-w-[100%] mb-4 px-4 py-[10px] border-[1px] border-lightGray  text-marineBlue font-bold outline-none focus:border-purplishBlue rounded-lg ${personalInfo.email && !validEmail && "border-strawberryRed"}`}
                        onChange={handleInputChange} type="email" name="email" id="email" required 
                        autoComplete="off" aria-invalid={validEmail ? "false" : "true"}
                        
                        value={personalInfo.email} placeholder="e.g. stephenking@lorem.com"/>
                        {!personalInfo.email && showError && <p className="text-strawberryRed text-opacity-85 font-semibold text-[0.9rem] lg:absolute lg:top-0 lg:right-1">This field is required</p>}
                    </div>

                    <div className="lg:relative">
                        <label className="block text-marineBlue text-[0.9rem] font-medium lg:mb-1" htmlFor="phone">Phone Number</label>
                        <input className={`min-w-[100%] mb-4 px-4 py-[10px] border-[1px] border-lightGray  text-marineBlue font-bold outline-none focus:border-purplishBlue rounded-lg ${personalInfo.phone && !validPhone && "border-strawberryRed"}`} 
                        onChange={handleInputChange} type="tel" name="phone" id="phone" required  
                        autoComplete="off" aria-invalid={validPhone ? "false" : "true"}
                        value={personalInfo.phone} placeholder="e.g. +1 234 567 890"/>
                        {!personalInfo.phone && showError && <p className="text-strawberryRed text-opacity-85 font-semibold text-[0.9rem] lg:absolute lg:top-0 lg:right-1">This field is required</p>}
                    </div>
            </div>
        </>
    );
}