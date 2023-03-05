import React from 'react'
import './Header.css'

import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Header() {
    return (
        <div className='header'>
            <img className='header_icon' src="https://i.pinimg.com/originals/1c/5e/94/1c5e94cfe604f37222bdbe24d6aa6b00.jpg" alt="" />

            <div className='header_center'>
                <input type="text" placeholder='Search by city or region, hotel, or place' />
                <SearchIcon />
            </div>

            <div className='header_right'>
                <p>Become a Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <PersonOutlineIcon />
            </div>

        </div>
    )
}

export default Header
