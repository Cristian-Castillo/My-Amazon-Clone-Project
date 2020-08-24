import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search'

function Header(){
    return(
        <nav className ='header'>
            {/*When image amz brand clicked goes to homepage*/}
             {/* logo on the left -> img */}
            <Link to ="/">
                <img 
                className = 'header__logo' 
                src ='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                alt ='' />
            </Link>
            {/* Search box */}
            <div className = 'header_search'>
                <input type ='text' className = 'header__searchInput' />
                <SearchIcon className ='header__searchIcon' />
            </div>
            {/* 3 Links on right*/}
            <div className ='header__nav'>
                {/* 1st link */}
                <Link to='/login' className = 'header__link'>
                    <div className ='header__option'>
                        <span className ='header__optionLineOne'>Hello Qazi</span>
                        <span className ='header__optionLineTwo'>Sign In</span>
                    </div>
                </Link>
                {/* 2st link */}
                <Link to='/' className = 'header__link'>
                    <div className ='header__option'>
                        <span className ='header__optionLineOne'>Returns</span>
                        <span className ='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                {/* 3st link */}
                <Link to='/' className = 'header__link'>
                    <div className ='header__option'>
                        <span className ='header__optionLineOne'>Your</span>
                        <span className ='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>
                {/* 4st link */}
                <Link to='/login' className = 'header__link'>
                    {/* <div className ='header__option'>
                        <span>Hello Qazi</span>
                        <span>Sign In</span>
                    </div> */}
                </Link>
            </div>
            {/* Basket icon with number*/}
        </nav>
    )
}

export default Header