import './Nav.css'

import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem to="/" icon="home" itemName="Início"/>
            <NavItem to="/users" icon="users" itemName="Usuários"/>
        </nav>
    </aside>