import React, { useState } from "react";
import '../../styles/sass/style.scss';
import UserNavNotification from "./userNavNotification";
import Bookmark from "../imageComponents/bookmark/bookmark";
import Message from "../imageComponents/message/message";
import UserNavImage from "../imageComponents/userNavImages/userNavImage";


const UserNav = () => {
    const [numBookmarks, setBookmark] = useState(0);
    const [numMessages, setMessages] = useState(0);

    // const increaseBookmark = () => (
    //     setBookmark(numBookmarks+1)
    // );
    //
    // const decreaseBookmark = () => {
    //     if (numBookmarks === 0) {
    //         setBookmark(0);
    //         return;
    //     }
    //     setBookmark(numBookmarks - 1);
    // };
    //
    // const increaseMessages = () => (
    //     setMessages(numMessages+1)
    // );
    //
    // const decreaseMessages = () => {
    //     if (numMessages === 0) {
    //         setMessages(0);
    //         return;
    //     }
    //     setMessages(numMessages - 1);
    // };

    return (
        <div className='user-nav'>
            <button className='user-nav__button'>
                <Bookmark color='#777'/>
                <UserNavNotification numNotifications={numBookmarks}/>
            </button>
            <button className='user-nav__button'>
                <Message color='#777'/>
                <UserNavNotification numNotifications={numMessages}/>
            </button>
            <button className='user-nav__button'>
                <UserNavImage/> Jonas
            </button>
        </div>
    );
}

export default UserNav;
