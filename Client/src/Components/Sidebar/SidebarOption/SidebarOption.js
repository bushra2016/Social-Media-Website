import React from "react";
import "./SidebarOption.css";

const SidebarOption = (props) => {
    const { text, Icon, active } = props;
    return (
        <div className={`Sidebar-option ${active && "Sidebar-option__active"}`}>
            <Icon className="sidebar-option__icon" />
            <h2>{text}</h2>
        </div>
    );
};

export default SidebarOption;
