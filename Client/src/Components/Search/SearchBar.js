
import "./searchBar.css";
import Sidebar from "../Sidebar/Sidebar";


const SearchPage = () => {
    return (
        <div className="searchBar">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="container">
                <h2>Search Page</h2>
                <div className="search-form">
                    <input type="text" placeholder="search here.." />
                    <select className="Select" style={{ fontSize: "20px" }}>
                        <option value="People" >People</option>
                        <option value="Countries">Countries</option>
                        <option value="Posts">Posts</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;