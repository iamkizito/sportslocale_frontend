import google_logo from "../../images/google.png"
import facebook_logo from "../../images/facebook.png"
import github_logo from "../../images/github.png"


function Oauth(props) {

    const handleOauth = (provider) => {
        switch (provider) {
            case 'facebook':
                console.log('Connecting to facebook oauth')
                break;
            case 'google':
                console.log('Connecting to google oauth')
                break;
            case 'github':
                console.log('Connecting to github oauth')
                break;
            default:
                console.log('Invalid')
        }
    }
    
    return (
        <div id="oauth">
            <h2>Sign in with:</h2>

            <div className="oauth_options">
                <a className="oauth_option google" onClick={() => handleOauth('google')}>
                    <img src={google_logo} alt="google logo"/>
                    <span>Google</span>
                </a>
                <a className="oauth_option facebook" onClick={() => handleOauth('facebook')}>
                    <img src={facebook_logo} alt="facebook logo"/>
                    <span>Facebook</span>
                </a>
                <a className="oauth_option github" onClick={() => handleOauth('github')}>
                    <img src={github_logo} alt="github logo"/>
                    <span>Github</span>
                </a>
            </div>
        </div>
    );
}

export default Oauth