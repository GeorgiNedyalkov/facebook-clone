import React from 'react'
import "./Header.css"
// Icons
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home'
import FlagIcon from '@mui/icons-material/Flag'
import SubscriptionsOutlined from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlined from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircle from '@mui/icons-material/SupervisedUserCircle';
import Add from "@mui/icons-material/Add";
import Forum from "@mui/icons-material/Forum"
import { NotificationsActive } from '@mui/icons-material';
import { ExpandMore } from '@mui/icons-material';

import { Avatar, IconButton } from "@mui/material";


function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <img 
              src='https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg'
              alt='facebook logo'
            />
            <div className='header__input'>
                <SearchIcon />
                <input type="text" />
            </div>
        </div>
        <div className='header__middle'>
            <div className='header__option'>
                <HomeIcon fontSize="large" />
            </div>
            <div className='header__option'>
                <FlagIcon fontSize="large" />
            </div>
            <div className='header__option'>
                <SubscriptionsOutlined fontSize="large" />
            </div>           
            <div className='header__option'>
                <StorefrontOutlined fontSize="large" />
            </div>           
            <div className='header__option'>
                <SupervisedUserCircle fontSize="large" />
            </div>
        </div>
        <div className='header__right'>
            <div className='header__info'>
                <Avatar />
                <h4>Georgi Nedyalkov</h4>
            </div>
            <IconButton>
                <Add />
            </IconButton>
            <IconButton>
                <Forum />
            </IconButton>  
            <IconButton>
                <NotificationsActive />
            </IconButton>
            <IconButton>
                <ExpandMore />
            </IconButton>
        </div>        
    </div>
  )
}

export default Header