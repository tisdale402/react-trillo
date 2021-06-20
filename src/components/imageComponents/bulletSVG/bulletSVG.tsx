import React from 'react';
import '../../../styles/sass/style.scss';

const BulletSVG = ({color} : {color : string}) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 20 20">
        <title>chevron-thin-right</title> <g fill={color}>
        <path d="M13.25 10l-7.141-7.42c-0.268-0.27-0.268-0.707 0-0.979 0.268-0.27 0.701-0.27 0.969 0l7.83 7.908c0.268 0.271 0.268 0.709 0 0.979l-7.83 7.908c-0.268 0.271-0.701 0.27-0.969 0s-0.268-0.707 0-0.979l7.141-7.417z"></path>
        </g>
    </svg>
);

export default BulletSVG;