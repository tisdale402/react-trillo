import React from 'react';
import '../../../styles/sass/style.scss';

const UserNavNotification = ({numNotifications} : {numNotifications : number}) => (
    <span className='user-nav__notification'>{numNotifications}</span>
);

export default UserNavNotification;