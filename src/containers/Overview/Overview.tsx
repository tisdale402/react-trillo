import React from 'react';
import '../../styles/sass/style.scss';
import OverviewHeading from "../../components/overview/overviewHeading";
import OverviewStars from "../../components/overview/overviewStars";
import OverviewLocation from "../../components/overview/overviewLocation";
import OverviewRating from "../../components/overview/overviewRating";

const Overview = () => (
    <div className='overview'>
        <OverviewHeading/>
        <OverviewStars/>
        <OverviewLocation/>
        <OverviewRating/>
    </div>
);

export default Overview;