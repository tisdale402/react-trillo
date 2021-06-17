import React from 'react';
import '../../styles/sass/style.scss';
import OverviewHeading from "../../components/overview/overviewHeading";
import OverviewRating from "../../components/overview/overviewRating";

const Overview = () => (
    <div className='overview'>
        <OverviewHeading/>
        <OverviewRating/>
    </div>
);

export default Overview;