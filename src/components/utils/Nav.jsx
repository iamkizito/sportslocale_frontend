import { Link } from "react-router-dom";
import guest_image from '../../images/guest.jpg';
import {paths} from "../../variables";



const Nav = (props) => {
    const user = props.user
    const position = props.position

    const getNav = (position) => {
        switch (position) {
            case 'right':
                return <RightNav user={user} paths={paths} hi='hi'/>
            case 'top':
                return <TopNav user={user} paths={paths}/>
            case 'bottom':
                return <BottomNav user={user} paths={paths}/>
            default:
                return
        }
    }

    return (
        <>        
        {getNav(position)}
        </>
    );
}


export default Nav;






function RightNav(props) {
    let user = props.user
    let paths = props.paths

    const handleSignOut = () => {
        localStorage.removeItem('accessToken');
    }

    return (
        <div id="right_nav_component">

            {/* BS - off canvass trigger */}
            <div className="right_offcanvas_trigger">
                <Link data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
                    <i className="bi bi-person-lines-fill"></i>
                </Link>
            </div>

            {/* BS - off canvass with backdrop (no-scroll)   */}
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                <div className="offcanvas-head">
                    <div className="offcanvas-title" id="offcanvasWithBackdropLabel">
                        <div className="profile media">
                            <img className="image rounded-circle" src={user ? user.image : guest_image} alt="User profile"/>
                            <div className="details media-body">
                                <span className="username account-heading d-block">{user ? user.username : "Guest"}</span>
                                <span className="credit d-block">Credit: {user ? user.balance : "N/A"}</span>
                            </div>
                        </div>                       
                    </div>
                </div>

                <div className="offcanvas-body">        
                    <nav className="back-drop-menu">
                        <ul className="nav_links">
                            <li><Link to={paths.home} className="nav_link home">Home</Link></li>
                            <li><Link to={paths.converter} className="nav_link converter">Converter</Link></li>
                            <li><Link to={paths.history} className=" nav_link history">History</Link></li>
                            <li><Link to={paths.contact} className=" nav_link contact-us">Contact Us</Link></li>
                            <li><Link to={paths.about} className=" nav_link about-us">About</Link></li>
                            {user
                                ? <li><Link to={paths.auth} className=" nav_link logout" onClick={handleSignOut}>Sign Out</Link></li>
                                : <li><Link to={paths.auth} className=" nav_link member-login">Sign In</Link></li> 
                            }
                        </ul>
                    </nav>                                                       
                </div>
            </div> 
        </div>
    );
}






function TopNav(props) {
    const user = props.user
    const paths = props.paths

    const handleSignOut = () => {
        localStorage.removeItem('accessToken');
    }

    return (
        <div id='top_nav_component'>

            <div className="left">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to={paths.home} className="nav-link home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={paths.converter} className="nav-link converter">Converter</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={paths.history} className="nav-link History">History</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={paths.contact} className="nav-link contact-us">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={paths.about} className="nav-link contact-us">About Us</Link>
                    </li>
                </ul>
            </div>

            <div className="right">
                {user ? (
                    <div className="dropdown">
                        {`Credit: $${user.balance} `}
                        <div className="btn btn-secondary dropdown" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false" style={{width:"40px", height:"40px", padding:"0px", borderRadius:"50%"}}>
                            <img className="image rounded-circle" src={guest_image} style={{width:"100%", height:"100%"}} alt="users profile"/>
                        </div>
                        
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><Link to={paths.profile} className="dropdown-item">Profile</Link></li>
                            <li><Link to={paths.setting} className="dropdown-item">Settings</Link></li>
                            <li><Link to={paths.auth} className="dropdown-item" onClick={handleSignOut}>Logout</Link></li>
                        </ul>
                    </div>
                ) : (
                    <Link to={paths.auth} className="register_login" >
                        <ul className="nav">             
                            <li className="nav-item">
                                <Link to={paths.auth} className="nav-link">Register/Login</Link>
                            </li>
                        </ul>
                        <div className="image_div">
                            <img className="image rounded-circle" src={guest_image} alt="users profile"/>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}




function BottomNav(props) {
    const paths = props.paths

    return (
        <div id='bottom_nav_component'>
            <ul className="nav">
                <li className="nav-item">
                    <Link to={paths.home} className="nav-link home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={paths.about} className="nav-link contact-us">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link to={paths.terms} className="nav-link terms">Terms</Link>
                </li>
                <li className="nav-item">
                    <Link to={paths.privacy} className="nav-link privacy-us">Privacy Policy</Link>
                </li>
            </ul>
        </div>
    );
}