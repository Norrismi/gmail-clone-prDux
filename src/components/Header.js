import React from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar, IconButton } from '@material-ui/core';
import gmail from '../Assets/gmail.png'


const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src={gmail} alt="" />


            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder='Search Mail' type="text" />
                <ArrowDropDownIcon className="header__inputCaret" />

            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar/>
            </div>
        </div>
    );
}

export default Header;
