import React from 'react';
import '../../styles/sass/style.scss';
import Star from "../imageComponents/star/Star";

const OverviewRating = () => (
    <div className='overview__stars'>
        <Star color='#eb2f64'/>
        <Star color='#eb2f64'/>
        <Star color='#eb2f64'/>
        <Star color='#eb2f64'/>
        <Star color='#eb2f64'/>
    </div>
);

export default OverviewRating;