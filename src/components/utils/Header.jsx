import { useEffect, useState } from 'react';
import Nav from './Nav';
import { endpoints } from '../../testData';
import logo from '../../images/sportslocale.png';
import { Link } from 'react-router-dom';
import {paths} from '../../variables';


const Header = (props) => {
    const user = props.user

    return (
        <header id="header_component"> 
            <div className="wrapper">           
                <div className="logo_div">
                    <Link to={paths.home}>
                        <img className='logo_image' src={logo} alt="website logo"/>
                    </Link>
                </div>

                <div className="nav_div">
                    <div className="top_nav">           
                        <Nav user={user} position='top'/>             
                    </div>
                    <div className="right_nav">
                        <Nav user={user} position='right'/>             
                    </div>
                </div>
            </div>            
        </header>
    );
}


export default Header;
