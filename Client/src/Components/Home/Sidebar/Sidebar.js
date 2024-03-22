import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import {
    Home,
    MailOutline,
    NotificationsNone,
    PermIdentity,
    Search,
    Twitter,

} from "@mui/icons-material"
import { Button } from "@mui/material";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Twitter className="sidebar__twitterIcon" />
            <SidebarOption active Icon={Home} text="Home" />
            <SidebarOption Icon={Search} text="Explore" />
            <SidebarOption Icon={NotificationsNone} text="Notifications" />
            <SidebarOption Icon={MailOutline} text="Messages" />
            
            <SidebarOption Icon={PermIdentity} text="Profile" />

            <Button className="sidebar__tweet-btn" variant="outlined" fullWidth>
                Post
            </Button>
        </div>
    );
};

export default Sidebar;