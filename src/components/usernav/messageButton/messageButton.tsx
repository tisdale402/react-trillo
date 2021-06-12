import React from "react";
import '../../../styles/sass/style.scss';
import Message from "../../imageComponents/message/message";

const MessageButton = () => (
    <button className='user-nav__button'>
    <Message color='#777'/>
    </button>
);

export default MessageButton