import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";

import {
    ImageOutlined,
    GifBoxOutlined,
    PollOutlined,
    SentimentSatisfiedAltOutlined,
    CalendarTodayOutlined,
    LocationOnOutlined
} from "@mui/icons-material";

const TweetBox = () => {
    return (
        <div className="tweetbox">
            <form className="tweetbox__form">
                <Avatar className="tweetbox__avatar" />
                <div className="tweetbox__form-field">
                    <div className="tweetbox__input">
                        <input type="text" placeholder="What's happening?" />
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
                        <Button className="tweetbox__btn">Post</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TweetBox;
