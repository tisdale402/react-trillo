import React from 'react';
import '../../../styles/sass/style.scss';

const MapSVG = ({className} : {className : string}) => (
    <li className={className}>
        <a href='#' className='side-nav__link'>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className='side-nav__icon'>
            <title>map</title>
            <path d="M19.447 3.718l-6-3c-0.281-0.141-0.613-0.141-0.895 0l-5.63 2.815-5.606-1.869c-0.306-0.102-0.64-0.051-0.901 0.138s-0.415 0.49-0.415 0.811v13.001c0 0.379 0.214 0.725 0.553 0.894l6 3c0.141 0.070 0.294 0.106 0.447 0.106s0.307-0.035 0.447-0.106l5.63-2.814 5.606 1.869c0.305 0.1 0.64 0.049 0.901-0.139s0.415-0.49 0.415-0.81v-13.002c0.001-0.379-0.213-0.725-0.552-0.894zM8 5.231l4-2v11.763l-4 2v-11.763zM2 4l4 1.333v11.661l-4-2v-10.994zM18 16.227l-4-1.334v-11.662l4 2v10.996z"></path>
        </svg>
            <span>Tours</span>
        </a>
    </li>
);

export default MapSVG;