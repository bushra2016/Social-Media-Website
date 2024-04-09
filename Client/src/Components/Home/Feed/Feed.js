import React, { useState, useEffect} from "react";
import "./Feed.css"
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";
import axios from "axios";
import CountryPost from "./CountryPost/CountryPost";

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get("http://localhost:3003/api/post");
            setPosts(response.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    return (
    <div className="feed">
        <header className="feed__header">
            <h2>Home</h2>
        </header>
        <TweetBox />
        <div className="CountryPost__container">
            <CountryPost />
            <CountryPost />
        </div>
        
        <div className="CountryPost__container">
        {posts.map((post) => (
            <Post
                key={post._id} // Assuming each post has a unique ID
                username={post.username}
                handle={post.handle}
                content={post.content}
                imageUrl={post.imageUrl}
            />
        ))}</div>
    </div>
    );
};

export default Feed;