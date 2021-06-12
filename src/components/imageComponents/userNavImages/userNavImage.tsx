import React from 'react';
import '../../../styles/sass/style.scss';
//@ts-ignore
import UserNavImg from "../../../../img/user.jpg";

const UserNavImage = () => (
    <img src={UserNavImg} alt="" className="user-nav__user-photo"/>
);

export default UserNavImage;