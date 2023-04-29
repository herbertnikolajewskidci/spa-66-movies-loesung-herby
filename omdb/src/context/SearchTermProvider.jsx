import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
export const SearchTermContext = React.createContext();

const SearchTermProvider = ({ children }) => {
    const [searchTerm, setsearchTerm] = useState("");
    const API_KEY = import.meta.env.VITE_API_KEY;
    const urlWithSearchTerm = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`;
    const [fetchedSearchData, setAllowFetchforSearch, errorMessage] =
        useFetch(urlWithSearchTerm);

    return (
        <SearchTermContext.Provider
            value={{
                searchTerm,
                setsearchTerm,
                fetchedSearchData,
                setAllowFetchforSearch,
                errorMessage,
            }}
        >
            {children}
        </SearchTermContext.Provider>
    );
};

export default SearchTermProvider;
