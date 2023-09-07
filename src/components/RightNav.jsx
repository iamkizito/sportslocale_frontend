

function RightNav(props) {

    let user = props.user

    return (
        <div id="right_nav_component">

            {/* BS - off canvass trigger */}
            <div className="right_offcanvas_trigger">
                <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
                    <i className="bi bi-person-lines-fill"></i>
                </a>
            </div>

            {/* BS - off canvass with backdrop (no-scroll)   */}
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                <div className="offcanvas-head">
                    <div className="offcanvas-title" id="offcanvasWithBackdropLabel">
                        <a href="{% url 'account:login' %}">
                            <div className="profile media">
                                <img className="image rounded-circle" src="" alt="User profile"/>
                                <div className="details media-body">
                                    <span className="username account-heading d-block">{user.authenticated ? user.username : "Guest"}</span>
                                    <span className="credit d-block">Credit: {user.authenticated ? user.balance : "N/A"}</span>
                                </div>
                            </div>                       
                        </a>
                    </div>
                </div>

                <div className="offcanvas-body">        
                    <nav className="back-drop-menu">
                        <ul className="nav_links">
                            <li><a className="nav_link home" href="/">Home</a></li>
                            <li><a className="nav_link converter" href="/">Converter</a></li>
                            <li><a className=" nav_link history" href="/">History</a></li>
                            <li><a className=" nav_link contact-us" href="/">Contact Us</a></li>
                            <li><a className=" nav_link about-us" href="/">About</a></li>
                            {user.authenticated
                                ? <li><a className=" nav_link logout" href="/">Sign Out</a></li>
                                : <li><a className=" nav_link member-login" href="/">Sign In</a></li> 
                            }
                        </ul>
                    </nav>                                                       
                </div>
            </div> 
        </div>
    );
}




export default RightNav