import React from 'react';
import '../../../styles/sass/style.scss';

const FlightSVG = ({className} : {className : string}) => (
    <li className={className}>
        <a href='#' className='side-nav__link'>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className='side-nav__icon'>
            <title>aircraft-take-off</title>
            <path d="M19.87 6.453c0.119 0.257 0.127 1.29-4.884 3.642l-4.913 2.306c-1.71 0.803-4.191 1.859-5.285 2.151-0.766 0.204-1.497-0.316-1.497-0.316s-2.206-1.975-2.792-2.419c-0.585-0.444-0.535-0.67 0.215-0.91 0.467-0.149 3.13 0.493 4.265 0.78 1.339-0.8 2.562-1.486 3.141-1.798-1.396-1.033-4.008-2.962-4.841-3.55-0.799-0.565 0.010-0.768 0.010-0.768 0.368-0.099 1.162-0.228 1.562-0.144 2.721 0.569 7.263 2.071 7.611 2.186 0.832-0.436 2.128-1.092 2.922-1.465 2.075-0.974 4.327-0.037 4.486 0.305z"></path>
        </svg>
            <span>Flights</span>
        </a>
    </li>
);

export default FlightSVG;