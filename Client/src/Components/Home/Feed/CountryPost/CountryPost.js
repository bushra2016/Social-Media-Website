import { Avatar } from "@mui/material";
import React from "react";
import "./CountryPost.css";

import { MoreHoriz, ChatBubbleOutline, FavoriteBorderOutlined, LocationOnOutlined} from "@mui/icons-material";

const CountryPost = () => {
    return (
    <div className="post">
        <Avatar 
            src="https://www.austrianpost.de/images/10-Mobil-Startseite-768x576px.jpg"
            className="post__avatar" />
        <div className="post__content">
            <div className="post__header">
                <div className="post__names">
                    <h3>John Doe</h3>
                    <h4>@johndoe</h4>
                </div>
                <MoreHoriz className="post__options" />
            </div>
            <div className="post__country__title">
                <div className="post__country">
                    <LocationOnOutlined className="post__country__icon" />
                    <div><span>Country name</span></div>
                </div>
                <div className="post__title">
                    <span>Title</span>
                </div>
            </div>
            <div className="post__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                ipsem sed fugit non balanditiis quam earum doloremque quibusdam totam
                maxime!
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