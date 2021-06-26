import React from "react";
import {Route} from 'react-router-dom';
import '../../styles/sass/style.scss';
import Homepage from "../../pages/Homepage/Homepage";
import Login from "../../pages/Login/Login";

const App = () => (
    <div className='App'>
        <Route path='/login'>
            <Login/>
        </Route>
        <Route path='/home'>
            <Homepage/>
        </Route>
    </div>
);


export default App;