// Making a global Searching Process

import { useState, createContext, useContext } from "react";

// Make a context
const SearchContext = createContext();

// Make a hook to use the SearchContext
export const useSearch = () => {
    return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
    const [searchInput, setSearchInput] = useState("");

    const onSearch = (input) => {
        setSearchInput(input);
    };

    return (
        <SearchContext.Provider value={{searchInput, onSearch}}>
            {children}
        </SearchContext.Provider>
    );
};