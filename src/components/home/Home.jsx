import Header from "../utils/Header";
import Main from "../utils/Main";
import Footer from "../utils/Footer";
import { Link } from "react-router-dom";
import paths from "../../paths";

import convert from "../../images/convert.jpg"
import stake_smart from "../../images/stake_smart.jpg"
import sports from "../../images/sports.jpg"
import countries from "../../images/countries.jpg"
import competitions from "../../images/competitions.jpg"
import markets from "../../images/markets.jpg"
import bet188 from "../../images/bet188.svg"
import bet9ja from "../../images/bet9ja.svg"
import easywin from "../../images/easywin.png"
import onexbet from "../../images/onexbet.png"
import useHome from "./useHome";

function Home() {

    const data = useHome()

    return (
        <div id="home">
            <Header user={data && data.user}/>
            <Main>
                <SectionOne className='section'/>
                <SectionTwo className='section'/>
                <Supports className='section'/>
                <Partners className='section'/>
            </Main>
            <hr />
            <Footer/>
        </div>
    );
}


export default Home;


function SectionOne(props) {
    return (
        <section id="section-one" className={props.className}>
            <div className="left content">
                <h1>Convert Booking Code</h1>
                <p>Relax and Convert Your Sports Betting Booking Code from one platform to another in seconds with ease</p>
                <Link to={paths.auth} className="btn btn-outline-primary">Convert Now!</Link>
            </div>
            <div className="right image">
                <img src={convert} alt="" />
            </div>
        </section>
    );
}


function SectionTwo(props) {
    return (
        <section id="section-two"  className={props.className}>
            <div className="left image">
                <img src={stake_smart} alt="" />
            </div>
            <div className="right content">
                <h1>Bet smart!</h1>
                <p>Compare and analyze odds of different betting platforms before placing a bet.</p>
                <Link to={paths.auth} className="btn btn-outline-primary">Try For Free!</Link>
            </div>
        </section>
    );
}


function Supports(props) {
    return (
        <section id='supports' className={props.className}>
            <h2>Supported Features</h2>
            <div className="supports">
                <div className='support'>
                    <h3>All <br /> Major Sports</h3>
                    <div className="image">
                        <img src={sports} alt="" />
                    </div>
                    <p>Ltias dicta error modi nobis explicabo officiis odit deleniti eum magnam omnis cum quos eos iste temporibus reiciendis enim voluptates incidunt ducimus dolorum, voluptatum cupiditate? </p>
                </div>
                <div className='support'>
                    <h3>Over <br /> 125 Countries</h3>
                    <div className="image">
                        <img src={countries} alt="" />
                    </div>
                    <p>Adipisicing elit. Expedita aliquam veniam molestias dicta error modi nobis explicabo officiis odit deleniti eum magnam omnis cum quos eos iste temporibus reiciendis enim voluptates incidunt ducimus dolorum, voluptatum cupiditate? </p>
                </div>
                <div className='support'>
                    <h3>Over <br /> 1250 Competitions</h3>
                    <div className="image">
                        <img src={competitions} alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquam veniam molestias dicta error modi nobis explicabo officiis odit deleniti eum magnam omnis cum quos eos iste temporibus reiciendis enim voluptates incidunt ducimus dolorum, voluptatum cupiditate? </p>
                </div>
                <div className='support'>
                    <h3>Over <br /> 125000 Markets</h3>
                    <div className="image">
                        <img src={markets} alt="" />
                    </div>
                    <p>Idicta error modi nobis explicabo officiis odit deleniti eum magnam omnis cum quos eos iste temporibus reiciendis enim voluptates incidunt ducimus dolorum, voluptatum cupiditate? </p>
                </div>
            </div>
        </section>  
    );
}


function Partners (props) {
    return (
        <section id="partners"  className={props.className}>
            <h2>Our Partners</h2>
            <div>
                <div className="left info">
                    <h3>We Work With The Best Partners</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem obcaecati optio sunt accusamus harum iure architecto itaque, numquam, animi voluptatem, omnis veritatis enim beatae at quidem quod excepturi! Esse molestiae facere optio autem maiores debitis similique, eius vel architecto impedit recusandae alias eligendi distinctio quia vitae laboriosam veniam magnam quibusdam.</p>
                    <div className="button">READ MORE</div>
                </div>
                <div className="right partner-images">
                    <div className="partner-image">
                        <img src={bet9ja} alt="" />
                    </div>
                    <div className="partner-image">
                        <img src={bet188} alt="" />
                    </div>
                    <div className="partner-image">
                        <img src={easywin} alt="" />
                    </div>
                    <div className="partner-image">
                        <img src={onexbet} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}