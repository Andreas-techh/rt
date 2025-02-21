import React, { useState } from "react";
import axios from "axios";

const AddReview = () => {
    const [review, setReview] = useState({
        movieTitle: "",
        reviewText: "",
        rating: "",
        author: ""
    });

    const handleChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/reviews", review);
            alert("Review added successfully!");
            setReview({ movieTitle: "", reviewText: "", rating: "", author: "" });
        } catch (error) {
            console.error("Error adding review:", error);
        }
    };

    return (
        <div>
            <h2>Add a Review</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="movieTitle" value={review.movieTitle} onChange={handleChange} placeholder="Movie Title" required />
                <textarea name="reviewText" value={review.reviewText} onChange={handleChange} placeholder="Write your review" required />
                <input type="number" name="rating" value={review.rating} onChange={handleChange} placeholder="Rating (1-10)" required min="1" max="10" />
                <input type="text" name="author" value={review.author} onChange={handleChange} placeholder="Your Name" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddReview;
