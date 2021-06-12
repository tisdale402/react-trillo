import React from "react";
import '../../styles/sass/style.scss';
import BookmarkButton from "../../components/usernav/bookmarkButton/bookmarkButton";
import MessageButton from "../../components/usernav/messageButton/messageButton";
import UserNavImageButton from "../../components/usernav/userNavImageButton/userNavImageButton";

const UserNav = () => (
    <div className='user-nav'>
        <div className='user-nav__icon-box'>
            <BookmarkButton/>
        </div>
        <div className='user-nav__icon-box'>
            <MessageButton/>
        </div>
        <div className='user-nav__icon-box'>
            <UserNavImageButton/>
        </div>
    </div>
);

export default UserNav;
