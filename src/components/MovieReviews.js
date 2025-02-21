import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/reviews");
                setReviews(response.data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };
        fetchReviews();
    }, []);

    return (
        <div>
            <h2>Movie Reviews</h2>
            {reviews.length === 0 ? (
                <p>No reviews yet.</p>
            ) : (
                <ul>
                    {reviews.map((review) => (
                        <li key={review._id}>
                            <h4>{review.movieTitle} - {review.rating}/10</h4>
                            <p>{review.reviewText}</p>
                            <small>By: {review.author}</small>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MovieReviews;
