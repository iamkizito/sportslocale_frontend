import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import logo from '../../images/sportslocale.png'

function Home() {
    return (
        <div id="home">
            <Header logo={logo}/>
            <Main>
                Hello
            </Main>
            <Footer/>
        </div>
    );
}


export default Home;