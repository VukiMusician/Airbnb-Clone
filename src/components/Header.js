import React from 'react'

//Import material-ui
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';
import LanguageOutlined  from '@material-ui/icons/LanguageOutlined';
import { Avatar } from '@mui/material'; //Check the source!?!?
import { Link } from "react-router-dom";

//Import styles
import '../styles/header.scss';

function Header() {
  return (
        <div className='header'>
          <Link to="/">
        <img className="header__icon"
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt=""/>
        </Link>
        <div className="header__center">
            <input type="text" />
            <SearchIcon />
        </div>
        <div className="header__right">
            <p>Become a host</p>
            <LanguageOutlined />
            <ExpandMoreIcon />
            <Avatar />
          
        </div>


        </div>
    
  )
}

export default Header;