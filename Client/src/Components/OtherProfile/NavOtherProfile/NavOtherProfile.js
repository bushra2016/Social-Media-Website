import React from "react";
import { useParams } from 'react-router-dom';
import PhotoUser from "../../../Public/PhotoUser/PhotoUser";
import "./NavOtherProfile.css";
import useFollow from '../../../Utils/UserActions';

const user = {
    user_photo:
        "https://images.squarespace-cdn.com/content/v1/5b7e14608ab722146afce766/1677349200894-YXLTF5YTGTG82XXFJ2ID/Kayla+Witt+headshot+%281%29.png?format=1000w",
    image_background:
        "https://www.xtrafondos.com/wallpapers/vertical/noche-en-las-montanas-con-planetas-de-fondo-7980.jpg",
};

const NavOtherProfile = (userData) => {
	const { userId } = useParams();
  	const { followed, handleFollow, handleUnfollow } = useFollow(userId);

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
						<h2>{userData?.data?.name}</h2>
						<span>@{userData?.data?.handle}</span>
					</div>
					<div className='btn_editProfile-content'>
						{
							followed 
							? (
								<span className="btn btn-primary" onClick={handleUnfollow}>
									Unfollow
								</span>
							)
							: (
								<span className="btn btn-primary" onClick={handleFollow}>
									Follow
								</span>
							)
						}
					</div>
				</div>
				<div className="main__dataProfile">
					<div className='main__dataProfile-description'>
						<div>
							{userData?.data?.bio}
						</div>
					</div>
					<div className='main__followBtns'>
						<div>
							<span className='followBtn__number'>{userData?.data?.following}</span>
							<span className='followBtn__text'>Following</span>
						</div>
						<div>
							<span className='followBtn__number'>{userData?.data?.followers}</span>
							<span className='followBtn__text'>Followers</span>
						</div>
					</div>
				</div>
			</section>
        </div>
    );
};

export default NavOtherProfile;