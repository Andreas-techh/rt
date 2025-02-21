import React, { useState } from "react";
import axios from "axios";

const MovieSearch = () => {
    const [movieTitle, setMovieTitle] = useState("");
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState("");

    const fetchMovie = async () => {
        try {
            setError("");
            const response = await axios.get(`http://localhost:5000/api/movie/${movieTitle}`);
            setMovie(response.data);
        } catch (err) {
            setError("Movie not found.");
            setMovie(null);
        }
    };

    return (
        <div>
            <h2>Search for a Movie</h2>
            <input 
                type="text" 
                value={movieTitle} 
                onChange={(e) => setMovieTitle(e.target.value)} 
                placeholder="Enter movie title"
            />
            <button onClick={fetchMovie}>Search</button>

            {error && <p>{error}</p>}
            {movie && (
                <div>
                    <h3>{movie.Title} ({movie.Year})</h3>
                    <img src={movie.Poster} alt={movie.Title} />
                    <p>{movie.Plot}</p>
                </div>
            )}
        </div>
    );
};

export default MovieSearch;
