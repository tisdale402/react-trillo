import React from 'react';
import '../../styles/sass/style.scss';
import LocationMarker from "../imageComponents/locationMarker/locationMarker";

const OverviewLocation = () => (
    <div className='overview__location'>
        <LocationMarker className='overview__icon-location'/>
        <button className='btn-inline'>Albufeira, Portugal</button>
    </div>
);

export default OverviewLocation;