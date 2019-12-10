import React from 'react';
import {NavLink} from 'react-router-dom';

const Header =()=>(
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" to="/" exact={true}>Home</NavLink>
        <NavLink activeClassName="is-active" to="/create">Create new</NavLink>
    </header>
);

export default Header;