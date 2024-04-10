import React from "react";
import "./PersonalProfilePost.css";

import { MoreHoriz } from "@mui/icons-material";

const PersonalProfilePost = (country) => {
    console.log("country",country?.country?.country)
    return (
    <div className="PersonalProfilePost">
        <div className="post__content">
            <div className="post__header">
                <div className="post__titles">
                    <h3>{country?.country?.country}</h3>
                </div>
                <MoreHoriz className="post__options" />
            </div>
            <div className="post__media">
                <img src="https://media.istockphoto.com/id/1436430810/photo/paris-eiffel-tower.webp?b=1&s=170667a&w=0&k=20&c=Qm33k45p4AGKtbNcqkx5hhfP7IRo8RYIpW_VdgE2bDU=" alt="" />
                {/*<img src='country?.country?.photo' alt="" />*/}
            </div>
        </div>
    </div>
    );
};

export default PersonalProfilePost;