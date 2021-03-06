import React from "react";
import '../../styles/sass/style.scss';
import Logo from '../../components/imageComponents/logo/logo';
import Search from "../../components/search/search";
import UserNav from "../../components/usernav/userNav";

const Header = () => (
    <div className="header">
        <Logo/>
        <Search/>
        <UserNav/>
    </div>
);

export default Header;