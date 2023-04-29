import { useContext } from "react";
import ErrorMessage from "../components/ErrorMessage";
import { SearchTermContext } from "../context/SearchTermProvider";
import MovieCards from "./MovieCards";

const DisplayList = () => {
    const { fetchedSearchData } = useContext(SearchTermContext);

    if (!fetchedSearchData) return <ErrorMessage />;

    return (
        <div>
            {fetchedSearchData["Response"] === "True" ? (
                <ul>
                    {fetchedSearchData["Search"].map((movie, index) => (
                        <MovieCards
                            key={index}
                            imgUrl={movie["Poster"]}
                            title={movie["Title"]}
                            imdbID={movie["imdbID"]}
                            link={"#"}
                        />
                    ))}
                </ul>
            ) : (
                <ErrorMessage />
            )}
        </div>
    );
};

export default DisplayList;
