import NavNotificationsItem from "./NavNotificationsItem/NavNotificationsItem";

import SettingsMenuGear from "../../../Public/SettingsMenuGear/SettingsMenuGear";
import PhotoUser from "../../../Public/PhotoUser/PhotoUser";
import { NavNotificationsMenuListOptions } from "./NavNotificationsListOptions";

import "./NavNotifications.css";

const NavNotifications = () => {
    return (
        <div className="container__NavNotification">
            <section className="header__NavNotification">
                <div className="container__NavNotification-title">
                    <div className="container__NavNotification-photo">
                    <PhotoUser size="32" />
                    </div>
                    <h2>Notifications</h2>
                </div>
                <div className="settings">
                    <i>
                        <SettingsMenuGear />
                    </i>
                </div>
            </section>
            <section className="main__NavNotification">
                <div className="mainContent__NavNotification">
					{NavNotificationsMenuListOptions?.map((option, index) => {
						return (
							<NavNotificationsItem key={index} option={option} />
						)
					})}
				</div>
            </section>
        </div>
    );
};

export default NavNotifications;
