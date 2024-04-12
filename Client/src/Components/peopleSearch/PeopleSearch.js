import React, { useState } from "react";
import "./peopleSearch.css";
import Sidebar from "../Sidebar/Sidebar";

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
            window.location.href = "/CountrySearch";
        }
    };

    return (
        <div className="searchBar">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="container">
                <h2>People search</h2>
                <div className="search-form">
                    <input type="text" placeholder="search here.." />
                    <select className="Select" style={{ fontSize: '20px' }} onChange={handleChange} value={selectedOption}>
                        <option value="">Search about</option> 
                        <option value="People">People</option>
                        <option value="Countries">Countries</option>
                        <option value="Posts">Posts</option>
                    </select>
                </div>

                <div className="people">
                    <img className="peopleImg" src="/images/medieval-276019_1280.jpg" alt="costume image" />
                    <span className="peopleName">luna Doe luna dou <br/>@Handel </span>
                    <button> follow</button>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
