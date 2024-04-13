import "./peopleSearch.css";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Home/Widgets/Widgets";

const SearchPage = () => {


    return (
        <div className="searchBar">

            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="container">
                <h2> People search</h2>
                <div className="search-form">
                    <input type="text" placeholder="search here.." />
                    <select className="Select" style={{ fontSize: '20px' }} >

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
            <Widgets/>

        </div>
    );
};

export default SearchPage;