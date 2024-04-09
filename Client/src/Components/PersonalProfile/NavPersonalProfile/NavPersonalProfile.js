
import PhotoUser from "../../../Public/PhotoUser/PhotoUser";
import "./NavPersonalProfile.css";

const user = {
    user_photo:
        "https://images.squarespace-cdn.com/content/v1/5b7e14608ab722146afce766/1677349200894-YXLTF5YTGTG82XXFJ2ID/Kayla+Witt+headshot+%281%29.png?format=1000w",
    image_background:
        "https://www.xtrafondos.com/wallpapers/vertical/noche-en-las-montanas-con-planetas-de-fondo-7980.jpg",
    name: "User Name ",
    username: "@username",
    description: "user description biography",
    joined_date: "May 2019",
    count_tweets: 33,
    following: 49,
    followers: 8,
};

const NavPersonalProfile = () => {
    return (
        <div className="container__navProfile">
			<section className="main__navProfile">
				<div className="main__navProfile-bgImage">
					<img src={user.image_background} alt="background img" width="600" />
				</div>
				<div className='main__navProfile-imgUser'>
					<div className='photo__profile'>
						<PhotoUser url={user.user_photo} size='133' />
					</div>
				</div>
				<div className='btn__editProfile-container'>
                    <div className='main__dataProfile-User'>
						<h2>{user.name}</h2>
						<span>{user.username}</span>
					</div>
					<div className='btn_editProfile-content'>
						<span>Edit Profile</span>
					</div>
				</div>
				<div className="main__dataProfile">
					<div className='main__dataProfile-description'>
						<div>
							{user.description}
						</div>
					</div>
					<div className='main__followBtns'>
						<div>
							<span className='followBtn__number'>{user.following}</span>
							<span className='followBtn__text'>Following</span>
						</div>
						<div>
							<span className='followBtn__number'>{user.followers}</span>
							<span className='followBtn__text'>Followers</span>
						</div>
					</div>
				</div>
			</section>
        </div>
    );
};

export default NavPersonalProfile;