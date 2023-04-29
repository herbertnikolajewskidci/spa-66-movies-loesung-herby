import { useEffect } from "react";
// import { SearchTermContext } from "../context/SearchTermProvider";
import useFetch from "../hooks/useFetch";
import ErrorMessage from "./ErrorMessage";
function MovieCards({ imgUrl, title, imdbID }) {
    // const { API_KEY } = useContext(SearchTermContext);
    const API_KEY = import.meta.env.VITE_API_KEY;
    const urlWithID = `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`;
    const [fetchedInfoData, setAllowFetchInfo] = useFetch(urlWithID);

    useEffect(() => {
        console.log(urlWithID);
        setAllowFetchInfo(true);
    }, []);

    return (
        <>
            {fetchedInfoData ? (
                <div className={"movie-card-container"}>
                    <div className={"image-container"}>
                        <div
                            className={"bg-image"}
                            style={{ backgroundImage: `url(${imgUrl})` }}
                        ></div>
                    </div>
                    <div className={"movie-info"}>
                        <h2>Movie Details</h2>
                        <div>
                            <h1>{title}</h1>
                            <small>
                                Released Date: {fetchedInfoData["Released"]}
                            </small>
                        </div>
                        <h4>Rating: {fetchedInfoData["imdbRating"]} / 10</h4>
                        <p>{fetchedInfoData["Plot"]}</p>
                        <div className={"tags-container"}>
                            {fetchedInfoData["Genre"].split(",").map((item) => (
                                <span key={item.trim()}>{item.trim()}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <ErrorMessage />
            )}
        </>
    );
}

export default MovieCards;
