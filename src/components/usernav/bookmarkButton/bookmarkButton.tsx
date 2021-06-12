import React from "react";
import '../../../styles/sass/style.scss';
import Bookmark from "../../imageComponents/bookmark/bookmark";

const BookmarkButton = () => (
    <button className='user-nav__button'>
    <Bookmark color='#777'/>
    </button>
);

export default BookmarkButton;