import React from "react";
import "./OtherProfile.css";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Home/Widgets/Widgets";
import NavOtherProfile from "./NavOtherProfile/NavOtherProfile";
import PersonalProfilePost from "../PersonalProfile/PersonalProfilePost/PersonalProfilePost"


const OtherProfile = () => {
    return (
        <div className="PersonalProfile">
            {/**Sidebar */}
            <Sidebar />

            <div className="PersonalProfile__container">
                <NavOtherProfile />
                <div className="PersonalProfile__country__container">
                    <PersonalProfilePost/>
                    <PersonalProfilePost/>
                    <PersonalProfilePost/>
                </div>
            </div>

            {/**Widgets */}
            <Widgets />
        </div>
    );
};

export default OtherProfile;