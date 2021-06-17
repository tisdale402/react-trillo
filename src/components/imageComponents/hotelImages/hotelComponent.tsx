import React from 'react';
import '../../../styles/sass/style.scss';

const HotelComponent = ({imagePath} : {imagePath : string}) => (
    <img src={imagePath} alt="Photo of hotel 1" className='gallery_photo'/>
);

export default HotelComponent;