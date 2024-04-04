import React from "react";
import "./Notifications.css";
import Sidebar from "../Home/Sidebar/Sidebar";
import Widgets from "../Home/Widgets/Widgets";
import NotificationItem from "./NotificationItem/NotificationItem";
import NavNotifications from "./NavNotifications/NavNotifications";

import PersonIcon from "@mui/icons-material/Person";
import { FavoriteOutlined } from "@mui/icons-material";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

const user = {
  user_photo: undefined,
  image_background:
    "https://www.xtrafondos.com/wallpapers/vertical/noche-en-las-montanas-con-planetas-de-fondo-7980.jpg",
  name: "User Name Logged",
  username: "@username",
  description: "user description biography",
  joined_date: "May 2019",
  count_tweets: 33,
  following: 49,
  followers: 8,
  notifications: [
    {
      id: "1",
      user_photo: undefined,
      name: "name user",
      username: "@username",
      time: "10m",
      text_notification: " liked your post",
      icon_notification: <FavoriteOutlined />,
    },
    {
      id: "2",
      user_photo: undefined,
      name: "name user",
      username: "@username2",
      time: "10m",
      text_notification: " Add you",
      icon_notification: <PersonIcon />,
    },
    {
      id: "3",
      user_photo: undefined,
      name: "name user",
      username: "@username2",
      time: "10m",
      text_notification: " liked your post",
      icon_notification: <ModeCommentOutlinedIcon />,
    },
  ],
};

const Notifications = () => {
  return (
    <div className="notifications">
      {/**Sidebar */}
      <Sidebar />

      <div className="notifications__container">
        <NavNotifications />
        <div className="notificationItem__notificationsList">
          {user?.notifications?.map((notification, id) => {
            return (
              <NotificationItem
                key={id}
                notification={notification}
                owner={user.username === notification.username}
                icon_notification={user.notifications.icon_notification}
              />
            );
          })}
        </div>
      </div>

      {/**Widgets */}
      <Widgets />
    </div>
  );
};

export default Notifications;
