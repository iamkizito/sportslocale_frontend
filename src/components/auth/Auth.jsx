import Oauth from "./Oauth";
import RegisterForm from "./RegisterForm";
import SignInForm from "./SignInForm";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import Main from "../utils/Main";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import paths from "../../paths";


function Auth() {
    const navigate = useNavigate();
    const authenticated = useAuthenticationEffect();
    
    if (authenticated) {
        navigate(paths.home)
    }
    
    const [showingRegister, setShowingRegister] = useState(true)

    return (
        <>
        <Header/>

        <Main>
            <div id="auth" className="container-sm">
                <div id="auth_toggle">
                    <div className="wrapper">                  
                        <div className={`toggle register ${showingRegister && 'toggle_on'}`} id="register_toggle" onClick={() => setShowingRegister(true)}>Register</div>
                        <div className={`toggle signin ${!showingRegister && 'toggle_on'}`} id ="signin_toggle" onClick={() => setShowingRegister(false)}>Sign In</div>
                    </div>
                </div>

                <div id="current_auth_showing">
                    {showingRegister 
                        ? <RegisterForm/>
                        : <SignInForm/>
                    }
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


export default Auth;




const useAuthenticationEffect = () => {
    const [authenticated, setAuthenticated] = useState(false);
    
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    }, [])

    return authenticated;
}