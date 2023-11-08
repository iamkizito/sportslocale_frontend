import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';
import github from '../../images/github.png';
import Nav from './Nav';


function Footer() {
    return (
        <footer id='footer'>
            <div className="socialmedia">
                <div className="instagram">
                    <img src={instagram} alt="instagram logo" />
                </div>
                <div className="facebook">
                    <img src={facebook} alt="facebook logo" />
                </div>
                <div className="twitter">
                    <img src={twitter} alt="twitter logo" />
                </div>
                <div className="github">
                    <img src={github} alt="github logo" />
                </div>
            </div>  

            <div className="nav">
                <Nav position='bottom'/>
            </div>

            <div className='copyright'>
                Sportslocale <span>&copy;</span> 2023
            </div>

        </footer>
    );
};

export default Footer;