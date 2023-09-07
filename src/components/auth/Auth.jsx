import Oauth from "./Oauth";
import RegisterForm from "./RegisterForm";
import SignInForm from "./SignInForm";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import logo from '../../images/sportslocale.png'
import { useState } from "react";


function Auth() {
    const [current, setCurrent] = useState({'component': RegisterForm});

    const switchTo = (id) => {
        let previous_selected = document.querySelector('#auth_toggle .toggle_on')
        previous_selected.classList.remove('toggle_on')

        switch (id) {
            case 'signin':
                setCurrent({'component': SignInForm})
                document.querySelector('#auth_toggle .signin').classList.add('toggle_on')
                break
            case 'register':
                setCurrent({'component': RegisterForm})
                document.querySelector('#auth_toggle .register').classList.add('toggle_on')
                break
            default:
                previous_selected.classList.add('toggle_on')
                console.log('invalid toggle id')
        }
    };

    return (
        <>
        <Header logo={logo}/>

        <Main>
            <div id="auth" className="container-sm">
                <div id="auth_toggle">
                    <div className="wrapper">                  
                        <div className="toggle register toggle_on" id="register_toggle" onClick={() => switchTo('register')}>Register</div>
                        <div className="toggle signin" id ="signin_toggle" onClick={() => switchTo('signin')}>Sign In</div>
                    </div>
                </div>

                <div id="current_auth_showing">
                    <current.component/>
                </div>

                <div className="or">
                    <hr className=""/>
                    <span className="">OR</span>
                    <hr className=""/>
                </div>

                <div className="oauth_div">
                    <Oauth/>
                </div>
            </div>
        </Main>

        <Footer/>
        </>
    );
}


export default Auth