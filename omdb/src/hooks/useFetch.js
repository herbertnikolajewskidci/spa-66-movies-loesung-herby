import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [fetchedData, setFetchedData] = useState(null);
    const [allowFetch, setAllowFetch] = useState(false); // Erlaube Fetch nur, wenn der Suchen-Button gedrückt wird
    const [errorState, setErrorState] = useState(null);

    async function fetchDataFunction(fetchUrl) {
        try {
            const response = await fetch(fetchUrl);
            const resData = await response.json();
            setFetchedData(resData);
        } catch (error) {
            setErrorState(error);
        }
    }

    useEffect(() => {
        allowFetch && fetchDataFunction(url);
    }, [allowFetch, url]);

    return [fetchedData, setAllowFetch, errorState];
}
