import { Avatar } from "@mui/material";
import React from "react";
import "./CountryPost.css";

import { MoreHoriz, ChatBubbleOutline, FavoriteBorderOutlined, LocationOnOutlined} from "@mui/icons-material";

const CountryPost = ( {postData} ) => {
    console.log("postData", postData)
    if (!postData) {
        console.error("postData is undefined");
        return null;
    }
    const { handle, username, country, title, content } = postData;

    return (
    <div className="post">
        <Avatar 
            src="https://www.austrianpost.de/images/10-Mobil-Startseite-768x576px.jpg"
            className="post__avatar" />
        <div className="post__content">
            <div className="post__header">
                <div className="post__names">
                    <h3>{username}</h3>
                    <h4>@{handle}</h4>
                </div>
                <MoreHoriz className="post__options" />
            </div>
            <div className="post__country__title">
                <div className="post__country">
                    <LocationOnOutlined className="post__country__icon" />
                    <div><span>{country}</span></div>
                </div>
                <div className="post__title">
                    <span>{title}</span>
                </div>
            </div>
            <div className="post__description">
                {content}
            </div>
            <div className="post__media">
                <img src="https://media.istockphoto.com/id/1436430810/photo/paris-eiffel-tower.webp?b=1&s=170667a&w=0&k=20&c=Qm33k45p4AGKtbNcqkx5hhfP7IRo8RYIpW_VdgE2bDU=" alt="" />
            </div>
            <div className="post__footer">
                <ChatBubbleOutline fontSize="small" />
                <FavoriteBorderOutlined fontSize="small" />
            </div>
        </div>
    </div>
    );
};

export default CountryPost;