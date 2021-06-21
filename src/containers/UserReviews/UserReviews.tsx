import React from 'react';
import '../../styles/sass/style.scss';
//@ts-ignore
import UserReviewImg1 from "../../../img/user-1.jpg";
//@ts-ignore
import UserReviewImg2 from "../../../img/user-2.jpg";
import UserReviewButton from "../../components/reviews/userReviewButton";
const UserReviews = () => (
    <div className='user-reviews'>
        <figure className='review'>
            <blockquote className='review__text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore iusto maxime
                molestiae nisi praesentium quis quos!
            </blockquote>
            <figcaption className='review__user'>
                <img src={UserReviewImg1} alt="" className='review__photo'/>
                <div className='review__user-box'>
                    <p className='review__user-name'>Nick Smith</p>
                    <p className='review__user-date'>Feb 23rd, 2021</p>
                </div>
                <div className='review__rating'>7.8</div>
            </figcaption>
        </figure>
        <figure className='review'>
            <blockquote className='review__text'>
                Perferendis quas. Ab consequatur dolorum ea excepturi harum incidunt magni molestiae.
            </blockquote>
            <figcaption className='review__user'>
                <img src={UserReviewImg2} alt="" className='review__photo'/>
                <div className='review__user-box'>
                    <p className='review__user-name'>Mary Thomas</p>
                    <p className='review__user-date'>Sept 13th, 2021</p>
                </div>
                <div className='review__rating'>9.3</div>
            </figcaption>
        </figure>
        <UserReviewButton/>
    </div>
);

export default UserReviews;