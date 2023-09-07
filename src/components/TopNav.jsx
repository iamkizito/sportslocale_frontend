import guest_image from '../images/guest.jpg';
import { Link } from "react-router-dom";


function TopNav(props) {
    const user = props.user
    const paths = props.paths
    console.log('paths', props.paths)

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
                {user.authenticated ? (
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img className="image rounded-circle" src={props.user.image} alt="users profile"/>
                        </button>
                        
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><Link to={paths.profile} className="dropdown-item">Profile</Link></li>
                            <li><Link to={paths.setting} className="dropdown-item">Settings</Link></li>
                            <li><Link to={paths.auth} className="dropdown-item">Logout</Link></li>
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



export default TopNav;