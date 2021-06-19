import React from 'react';
import '../../styles/sass/style.scss';
//@ts-ignore
import UserRecommendationImg1 from "../../../img/user-3.jpg";
//@ts-ignore
import UserRecommendationImg2 from "../../../img/user-4.jpg";
//@ts-ignore
import UserRecommendationImg3 from "../../../img/user-5.jpg";
//@ts-ignore
import UserRecommendationImg4 from "../../../img/user-6.jpg";

const UserRecommendation = () => (
    <div className='recommend'>
        <p className='recommend__count'>Lucy and 3 other friends recommend this hotel</p>
        <img src={UserRecommendationImg1} alt="" className="recommend__photo"/>
        <img src={UserRecommendationImg2} alt="" className="recommend__photo"/>
        <img src={UserRecommendationImg3} alt="" className="recommend__photo"/>
        <img src={UserRecommendationImg4} alt="" className="recommend__photo"/>
    </div>
);

export default UserRecommendation;