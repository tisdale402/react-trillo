import React from 'react';
import '../../styles/sass/style.scss';
import BulletSVG from "../imageComponents/bulletSVG/bulletSVG";

const BulletList = () => (
        <ul className='list'>
            <li className='list__item'>
                <BulletSVG color='#eb2f64'/>  Close to the beach
            </li>
            <li className='list__item'>
                <BulletSVG color='#eb2f64'/>  Breakfast included
            </li>
            <li className='list__item'>
                <BulletSVG color='#eb2f64'/>  Free airport shuttle
            </li>
            <li className='list__item'>
                <BulletSVG color='#eb2f64'/>  Free wifi in all rooms
            </li>
            <li className='list__item'>
                <BulletSVG color='#eb2f64'/>  Air conditioning and heating
            </li>
            <li className='list__item'>
                <BulletSVG color='#eb2f64'/>  Pets allowed
            </li>
            <li className='list__item'>
                <BulletSVG color='#eb2f64'/>  We speak all languages
            </li>
            <li className='list__item'>
                <BulletSVG color='#eb2f64'/>  Perfect for families
            </li>
        </ul>
);

export default BulletList;