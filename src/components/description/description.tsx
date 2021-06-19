import React from 'react';
import '../../styles/sass/style.scss';
import BulletSVG from "../imageComponents/bulletSVG/bulletSVG";
import BulletList from "./bulletList";
import UserRecommendation from "./userRecommendation";

const Description = () => (
    <div className='description'>
        <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium alias culpa eius eligendi error excepturi fugit magnam,
            nulla odio quasi, quisquam quod veniam voluptas.
        </p>
        <p className='paragraph'>
            Quisquam quod veniam voluptas. Accusamus autem dolor dolorum esse quibusdam!
        </p>
        <BulletList/>
        <UserRecommendation/>
    </div>
);

export default Description;