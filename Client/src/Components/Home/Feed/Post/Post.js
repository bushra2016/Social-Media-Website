import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

import { MoreHoriz, ChatBubbleOutline, FavoriteBorderOutlined} from "@mui/icons-material";

const Post = ({ username, handle, content, imageUrl }) => {
    const handleClick = () => {
        console.log('Notification sent!');
      };
    
    return (
    <div className="post">
        <Avatar 
            src="https://www.austrianpost.de/images/10-Mobil-Startseite-768x576px.jpg"
            className="post__avatar" />
        <div className="post__content">
            <div className="post__header">
                <div className="post__titles">
                    <h3>{username}</h3>
                    <h4>@{handle}</h4>
                </div>
                <MoreHoriz className="post__options" />
            </div>
            <div className="post__description">
                {content}
            </div>
            <div className="post__media">
                <img src={imageUrl} alt="" />
            </div>
            
            <div className="post__footer">
                <ChatBubbleOutline onClick={handleClick} className="post-btn" fontSize="small" />
                <FavoriteBorderOutlined onClick={handleClick} className="post-btn" fontSize="small" />
            </div>
        </div>
    </div>
    );
};

export default Post;