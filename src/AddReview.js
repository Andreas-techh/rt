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
           
