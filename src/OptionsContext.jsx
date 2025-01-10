// Making a global options dropdown

import { createContext, useContext, useState, useEffect } from "react";

const OptionsContext = createContext();

export const useOptions = () => {
    return useContext(OptionsContext);
};

export const OptionsProvider = ({ children }) => {
    const [selectedOptions, setSelectedOptions] = useState({
        unisex: false,
        male: false,
        female: false,
        disabled: false,
        bidet: false
    });

    const toggleCheckBox = (check) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [check] : !prev[check]
        }));
    };

    // Update unisex state whenever male or female checkbox changes
    useEffect(() => {
        if (selectedOptions.male && selectedOptions.female) {
        setSelectedOptions((prev) => ({
            ...prev,
            unisex: true,  // Set unisex to true if both male and female are checked
        }));
        } else {
        setSelectedOptions((prev) => ({
            ...prev,
            unisex: false, // Otherwise, set unisex to false
        }));
        }
    }, [selectedOptions.male, selectedOptions.female]); // Run effect whenever male or female state changes

    return (
        <OptionsContext.Provider value ={{ selectedOptions, toggleCheckBox}}>
            {children}
        </OptionsContext.Provider>
    )
};