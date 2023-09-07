import guest_image from '../images/guest.jpg'


function TopNav(props) {
    let user = props.user

    return (
        <div id='top_nav_component'>

            <div className="left">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link home" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link converter" href="/">Converter</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link History" href="/">History</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link contact-us" href="/">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link contact-us" href="/">About Us</a>
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
                            <li><a className="dropdown-item" href="/">Profile</a></li>
                            <li><a className="dropdown-item" href="/">Settings</a></li>
                            <li><a className="dropdown-item" href="/">Logout</a></li>
                        </ul>
                    </div>
                ) : (
                    <a href="/" className="register_login" >
                        <ul className="nav">             
                            <li className="nav-item">
                                <a className="nav-link contact-us" href="/">Register/Login</a>
                            </li>
                        </ul>
                        <div className="image_div">
                            <img className="image rounded-circle" src={guest_image} alt="users profile"/>
                        </div>
                    </a>
                )}
            </div>
        </div>
    );
}



export default TopNav