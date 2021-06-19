import React from 'react';
import '../../styles/sass/style.scss';

import HotelSVG from "../../components/imageComponents/hotelSVG/hotelSVG";
import FlightSVG from "../../components/imageComponents/flightSVG/flightSVG";
import KeySVG from "../../components/imageComponents/keySVG/keySVG";
import MapSVG from "../../components/imageComponents/mapSVG/mapSVG";
const Sidebar = () => (
    <nav className='sidebar'>
        <ul className='side-nav'>
            <HotelSVG className='side-nav__item side-nav__item--active'/>
            <FlightSVG className='side-nav__item'/>
            <KeySVG className='side-nav__item'/>
            <MapSVG className='side-nav__item'/>
        </ul>
        <div className='legal'>
            &copy; 2021 by Trillo. All rights reserved.
        </div>
    </nav>
);

export default Sidebar;