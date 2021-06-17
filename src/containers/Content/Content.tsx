import React from 'react';
import '../../styles/sass/style.scss';
import HotelView from "../HotelView/HotelView";
import Sidebar from "../Sidebar/Sidebar";
import Overview from "../Overview/Overview";

const Content = () => (
    <div className='content'>
        <Sidebar/>
        <HotelView/>
    </div>
);

export default Content;