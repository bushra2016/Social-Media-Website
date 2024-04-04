import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import {
    Home,
    MailOutline,
    NotificationsNone,
    PermIdentity,
    Search,
    Logout
} from "@mui/icons-material"
import { Button } from "@mui/material";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src="./TrekkersIcon.jpg" alt="" className="sidebar__trekkersIcon" />
            <SidebarOption active Icon={Home} text="Home" />
            <SidebarOption Icon={Search} text="Explore" />
            <SidebarOption Icon={NotificationsNone} text="Notifications" />
            <SidebarOption Icon={MailOutline} text="Messages" />
            <SidebarOption Icon={PermIdentity} text="Profile" />
            <SidebarOption Icon={Logout} text="Logout" path=''/>

            <Button className="sidebar__tweet-btn" variant="outlined" fullWidth>
                Post
            </Button>
        </div>
    );
};

export default Sidebar;
