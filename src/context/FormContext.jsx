import { createContext, useContext, useState } from "react";

const FormContext = createContext({});

export const useFormContext = () => {
    return useContext(FormContext);
}

export const FormProvider = ({children}) => {
    const [selectedStep, setSelectedStep] = useState(1);
    const [selectedPlanId, setSelectedPlanId] = useState(1);
    const [selectedAddonsIds, setSelectedAddonsIds] = useState([101]);
    const [billingType, setBillingType] = useState("monthly");
    const [personalInfo, setPersonalInfo] = useState({name: "", email: "", phone: ""});

    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegExp = /^(\+\d{1,4}\s?)?(\d{1,4}[\s\-]?)?(\(\d{1,4}\)[\s\-]?)?(\d{1,12}[\s\-]?)+$/;
    const nameRegExp = /^[a-zA-Z]{2,}(?:\s[a-zA-Z]+)?$/;

    const {name, email, phone} = personalInfo;
    const validEmail = emailRegExp.test(email);
    const validName = nameRegExp.test(name);
    const validPhone = phoneRegExp.test(phone);

    const contextValues = {selectedStep, setSelectedStep, selectedPlanId, setSelectedPlanId, selectedAddonsIds, setSelectedAddonsIds, billingType, setBillingType, personalInfo, setPersonalInfo, validEmail, validName, validPhone}

    return<FormContext.Provider value={contextValues}>{children}</FormContext.Provider>
}