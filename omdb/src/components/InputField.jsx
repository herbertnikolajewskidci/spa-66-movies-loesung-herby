import { useContext, useState } from "react";
import { SearchTermContext } from "../context/SearchTermProvider";
const InputField = () => {
    const [inputValue, setInputValue] = useState("");
    const { setsearchTerm, setAllowFetchforSearch } =
        useContext(SearchTermContext);

    function handleSubmit(event) {
        event.preventDefault();
        setsearchTerm(inputValue);
        setAllowFetchforSearch(true); // Erlaube Fetch nur, wenn der Suchen-Button gedrückt wird
        setInputValue("");
    }

    return (
        <div>
            <form>
                <input
                    placeholder="Search for a movie"
                    type="text"
                    name="searchTerm"
                    id="searchTerm"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>
                    Suchen
                </button>
            </form>
        </div>
    );
};

export default InputField;
