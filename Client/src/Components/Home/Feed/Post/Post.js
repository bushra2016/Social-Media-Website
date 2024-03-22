import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

import { MoreHoriz, ChatBubbleOutline, Repeat, FavoriteBorderOutlined, PublishOutlined} from "@mui/icons-material";

const Post = () => {
    return (
    <div className="post">
        <Avatar 
            src="https://www.austrianpost.de/images/10-Mobil-Startseite-768x576px.jpg"
            className="post__avatar" />
        <div className="post__content">
            <div className="post__header">
                <div className="post__titles">
                    <h3>John Doe</h3>
                    <h4>@johndoe</h4>
                </div>
                <MoreHoriz className="post__options" />
            </div>
            <div className="post__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                ipsem sed fugit non balanditiis quam earum doloremque quibusdam totam
                maxime!
            </div>
            <div className="post__media">
                <img src="https://www.austrianpost.de/images/10-Mobil-Startseite-768x576px.jpg" alt="" />
            </div>
            <div className="post__footer">
                <ChatBubbleOutline fontSize="small" />
                <Repeat fontSize="small" />
                <FavoriteBorderOutlined fontSize="small" />
                <PublishOutlined fontSize="small" />
            </div>
        </div>
    </div>
    );
};

export default Post;