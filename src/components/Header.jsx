import TopNav from './TopNav'
import RightNav from './RightNav'


function Header(props) {
    let user = {'authenticated': true, "username": 'kizii', "balance": 9999}

    return (
        <header id="header_component"> 
            <div className="wrapper">           
                <div className="logo_div">
                    <a href="/">
                        <img className='logo_image' src={props.logo} alt="website logo"/>
                    </a>
                </div>

                <div className="nav_div">
                    <div className="top_nav">
                        <TopNav user={user}/>             
                    </div>
                    <div className="right_nav">
                        <RightNav user={user}/>
                    </div>
                </div>
            </div>            
        </header>
    );
}


export default Header