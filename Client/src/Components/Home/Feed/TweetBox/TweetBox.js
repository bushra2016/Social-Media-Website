import { Avatar, Button } from "@mui/material";
import React, { useState} from 'react';
import { useLocation } from 'react-router-dom';
import "./TweetBox.css";
import axios from "axios";

import {
    ImageOutlined,
    GifBoxOutlined,
    PollOutlined,
    SentimentSatisfiedAltOutlined,
    CalendarTodayOutlined,
    LocationOnOutlined
} from "@mui/icons-material";

const TweetBox = () => {
    
    const [post, setPost] = useState('');
    const { state } = useLocation();
    const username = state && state.id;
    console.log("username: ",username);

    async function handleSubmit(e) {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:3003/api/post", {
          post: post,
          postedBy: username
        });
        if(response.data === 'Posted successful') {
            console.log('done');
        } else if (response.data === 'error') {
          alert("error");
        }
      } catch (error) {
        alert("Wrong details");
        console.error(error);
      }
    }
    
    return (
        <div className="tweetbox">
            <form method='POST' onSubmit={handleSubmit} className="tweetbox__form">
                <Avatar className="tweetbox__avatar" />
                <div className="tweetbox__form-field">
                    <div className="tweetbox__input">
                        <input 
                            type="text"
                            name="post"
                            value={post}
                            onChange={(e)=>{setPost(e.target.value)}}
                            placeholder="Where did you go?"
                        />
                    </div>
                    <div className="tweetbox__input">
                        <div className="tweetbox__icons">
                            <ImageOutlined className="tweetbox__icon" />
                            <GifBoxOutlined className="tweetbox__icon" />
                            <PollOutlined className="tweetbox__icon" />
                            <SentimentSatisfiedAltOutlined className="tweetbox__icon" />
                            <CalendarTodayOutlined className="tweetbox__icon" />
                            <LocationOnOutlined className="tweetbox__icon" />
                        </div>
                        <Button type="submit" className="tweetbox__btn">Post</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TweetBox;
