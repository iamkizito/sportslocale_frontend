import { Link } from "react-router-dom";

function RightNav(props) {
    let user = props.user
    let paths = props.paths

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
                            <img className="image rounded-circle" src="" alt="User profile"/>
                            <div className="details media-body">
                                <span className="username account-heading d-block">{user.authenticated ? user.username : "Guest"}</span>
                                <span className="credit d-block">Credit: {user.authenticated ? user.balance : "N/A"}</span>
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
                            {user.authenticated
                                ? <li><Link to={paths.auth} className=" nav_link logout">Sign Out</Link></li>
                                : <li><Link to={paths.auth} className=" nav_link member-login">Sign In</Link></li> 
                            }
                        </ul>
                    </nav>                                                       
                </div>
            </div> 
        </div>
    );
}




export default RightNav;