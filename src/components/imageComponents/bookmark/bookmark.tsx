import React from "react";
import '../../../styles/sass/style.scss';

const Bookmark = ({color}: {color: string}) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" viewBox="0 0 20 20">
        <title>bookmark</title> <g fill={color}>
        <path d="M14 2v17l-4-4-4 4v-17c0-0.553 0.585-1.020 1-1h6c0.689-0.020 1 0.447 1 1z"></path>
    </g>
    </svg>
)

export default Bookmark;