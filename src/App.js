import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MovieSearch from "./components/MovieSearch";
import MovieReviews from "./components/MovieReviews";
import AddReview from "./components/AddReview";

const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Search</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/add-review">Add Review</Link>
            </nav>
            <Routes>
                <Route path="/" element={<MovieSearch />} />
                <Route path="/reviews" element={<MovieReviews />} />
                <Route path="/add-review" element={<AddReview />} />
            </Routes>
        </Router>
    );
};

export default App;
