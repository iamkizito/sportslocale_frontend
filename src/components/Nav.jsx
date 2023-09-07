import RightNav from './RightNav';
import TopNav from './TopNav';



function Nav(props) {
    const user = props.user

    const paths = {
        "home": "/",
        "auth": "/auth",
        "converter": "/converter",
        "history": "/history",
        "contact": "/contact",
        "about": "/about",
        "profile": "/profile",
        "setting": "/setting"
    }

    return (
        <>        
        {props.position === 'right'
            ? <RightNav user={user} paths={paths} hi='hi'/>
            : <TopNav user={user} paths={paths}/>
        }
        </>
    );
}

export default Nav;