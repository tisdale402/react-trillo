import React from 'react';

const Message = ({color}: {color: string}) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" viewBox="0 0 20 20">
        <title>message</title>
        <g fill={color}>
        <path d="M18 6v7c0 1.1-0.9 2-2 2h-4v3l-4-3h-4c-1.101 0-2-0.9-2-2v-7c0-1.1 0.899-2 2-2h12c1.1 0 2 0.9 2 2z"></path>
        </g>
        </svg>
);

export default Message;