import React from 'react';
import '../../styles/sass/style.scss';
import Description from "../../components/description/description";
import UserReviews from "../UserReviews/UserReviews";

const Detail = () => (
    <div className='detail'>
        <Description/>
        <UserReviews/>
    </div>
);

export default Detail;