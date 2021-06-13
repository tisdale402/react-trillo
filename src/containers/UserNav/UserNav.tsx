import React, { useState } from "react";
import '../../styles/sass/style.scss';
import UserNavNotification from "../../components/usernav/userNavNotification/userNavNotification";
import Bookmark from "../../components/imageComponents/bookmark/bookmark";
import Message from "../../components/imageComponents/message/message";
import UserNavImage from "../../components/imageComponents/userNavImages/userNavImage";


const UserNav = () => {
    const [numBookmarks, setBookmark] = useState(0);
    const [numMessages, setMessages] = useState(0);

    const increaseBookmark = () => (
        setBookmark(numBookmarks+1)
    );

    const decreaseBookmark = () => {
        if (numBookmarks === 0) {
            setBookmark(0);
            return;
        }
        setBookmark(numBookmarks - 1);
    };

    const increaseMessages = () => (
        setMessages(numMessages+1)
    );

    const decreaseMessages = () => {
        if (numMessages === 0) {
            setMessages(0);
            return;
        }
        setMessages(numMessages - 1);
    };

    return (
        <div className='user-nav'>
            <button className='user-nav__button'>
                <Bookmark color='#777'/>
                <UserNavNotification numNotifications={numBookmarks}/>
            </button>
            <button onClick={increaseBookmark}>Increase Bookmarks</button>
            <button onClick={decreaseBookmark}>Decrease Bookmarks</button>
            <button className='user-nav__button'>
                <Message color='#777'/>
                <UserNavNotification numNotifications={numMessages}/>
            </button>
            <button onClick={increaseMessages}>Increase Messages</button>
            <button onClick={decreaseMessages}>Decrease Messages</button>
            <button className='user-nav__button'>
                <UserNavImage/> Jonas
            </button>
        </div>
    );
}

export default UserNav;
