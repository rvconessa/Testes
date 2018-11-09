import React from 'react';

import Logo from './Logo'
import DropDown from './DropDown'

import './Header.css'

const Header = () => (
    <div>
        <header>
            <Logo pageTitle='App Structure' />
            <DropDown title='Renan Vichetti' />
        </header>
    </div>
)

export default Header
