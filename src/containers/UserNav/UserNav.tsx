import React from "react";
import '../../styles/sass/style.scss';
import UserNavNotification from "../../components/usernav/userNavNotification/userNavNotification";
import Bookmark from "../../components/imageComponents/bookmark/bookmark";
import Message from "../../components/imageComponents/message/message";
import UserNavImage from "../../components/imageComponents/userNavImages/userNavImage";

const UserNav = () => (
    <div className='user-nav'>
        <button className='user-nav__button'>
            <Bookmark color='#777'/>
            <UserNavNotification/>
        </button>
        <button className='user-nav__button'>
            <Message color='#777'/>
            <UserNavNotification/>
        </button>
        <button className='user-nav__button'>
            <UserNavImage/> Jonas
        </button>
    </div>
);

export default UserNav;
