import { useFormContext } from "../context/FormContext";
import addons from "../data/addons";

export function Addons () {
    const { selectedStep, selectedAddonsIds, setSelectedAddonsIds, billingType
    } = useFormContext();

    function handleAddOnSelecion(addonId) {
        setSelectedAddonsIds(prevAddonIds => {
            if(prevAddonIds.includes(addonId)) {
                return prevAddonIds.filter(id => id !== addonId);
            }
            else {
                return [...prevAddonIds, addonId];
            }
        });
    }
    const billingPrices = billingType === "monthly" ? "monthlyPrice" : "yearlyPrice";

    return (
        <>
            <div className={`absolute -top-[7rem] md:-top-[6rem] left-1/2 -translate-x-1/2 shadow w-[90%] max-w-[500px] md:max-w-[580px] mx-auto px-8 py-6 bg-white ${selectedStep !== 3 && "hidden"}  lg:relative lg:top-0 lg:m-0 lg:p-0 lg:w-full lg:max-w-[100%] lg:shadow-none `}>
                <div className="lg:mb-8">
                    <h1 className="text-2xl lg:text-4xl text-marineBlue font-bold">Pick add-ons</h1>
                    <p className="mt-3 mb-6">Add-ons help enhance your gaming experience.</p>

                </div>
                <div  className={`flex flex-col gap-3 lg:gap-4`}>
                {
                addons.map((addon, index) => <div className={`w-full flex gap-4 items-center border-[1px] border-lightGray px-4 py-3 lg:p-4 rounded-lg ${selectedAddonsIds.includes(addon.id) && " border-purplishBlue bg-magnolia"}`} key={addon.id}>
                    <div>
                        <label htmlFor={`selectAddon_${index+1}`} className="sr-only">Select addon</label>
                        <input onChange={() => handleAddOnSelecion(addon.id)} checked={selectedAddonsIds.includes(addon.id)} type="checkbox" key={addon.id} id={`selectAddon_${index+1}`}/>
                    </div>
                    <div>
                        <p className="text-marineBlue text-base font-semibold">{addon.title}</p>
                        <p className="text-sm">{addon.description}</p>
                    </div>
                    <div className="ml-auto">
                    <p className="text-purplishBlue text-sm font-medium">+${addon[billingPrices]}{billingType === "monthly"? "/mo" :"/yr"}</p>
                    </div>
            </div>)
                    }
                    </div>
                </div>
        </>
    );
}