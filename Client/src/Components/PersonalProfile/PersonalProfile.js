import React from "react";
import "./PersonalProfile.css";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Home/Widgets/Widgets";
import NavPersonalProfile from "./NavPersonalProfile/NavPersonalProfile";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PersonalProfilePost from "./PersonalProfilePost/PersonalProfilePost"


const PersonalProfile = () => {
    return (
        <div className="PersonalProfile">
            {/**Sidebar */}
            <Sidebar />

            <div className="PersonalProfile__container">
                <NavPersonalProfile />
                <div className="PersonalProfile__btn_addcountry__container">
                    <div className='btn_addcountry-content'>
                        <AddLocationAltIcon />
						<span>Add country</span>
					</div>
                </div>
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

export default PersonalProfile;