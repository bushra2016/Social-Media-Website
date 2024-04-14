import React, { useState } from "react";
import "./searchBar.css";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Home/Widgets/Widgets";

const SearchPage = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        if (selectedValue === "People") {
            window.location.href = "/PeopleSearch";
        } else if (selectedValue === "Countries") {
            window.location.href = "/CountrySearch";
        } else if (selectedValue === "Posts") {
            window.location.href = "/PostSearch";
        }
    };

    return (
        <div className="searchBar">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="container">
                <h2>Search Page</h2>
                <div className="search-form">
                    <input type="text" placeholder="search here.." />
                    <select className="Select" style={{ fontSize: "20px" }} onChange={handleChange} value={selectedOption}>
                        <option value=""> Search about </option> 
                        <option value="People">People</option>
                        <option value="Countries">Countries</option>
                        <option value="Posts">Posts</option>
                    </select>
                </div>
            </div>
            
            <Widgets/>
        
        </div>
        
    );
};

export default SearchPage;
