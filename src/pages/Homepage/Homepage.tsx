import React from 'react';
import '../../styles/sass/style.scss';
import Header from "../../containers/Header/header";
import Content from "../../containers/Content/Content";

const Homepage = () => (
    <React.Fragment>
        <Header/>
        <Content/>
    </React.Fragment>
);

export default Homepage;