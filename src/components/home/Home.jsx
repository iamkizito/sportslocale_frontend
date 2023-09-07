import Header from "../Header";
import Footer from "../Footer";
import logo from '../../images/sportslocale.png'

function Home () {
    return (
        <div id="home">
            <Header logo={logo}/>
            <main>
                hello
            </main>
            <Footer/>
        </div>
    );
}


export default Home;