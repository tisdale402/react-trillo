import React from 'react';
import '../../styles/sass/style.scss';
import OverviewHeading from "../../components/overview/overviewHeading";
import OverviewRating from "../../components/overview/overviewRating";
import OverviewLocation from "../../components/overview/overviewLocation";

const Overview = () => (
    <div className='overview'>
        <OverviewHeading/>
        <OverviewRating/>
        <OverviewLocation/>
    </div>
);

export default Overview;