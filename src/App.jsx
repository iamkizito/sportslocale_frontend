import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import logo from './images/sportslocale.png';
import './styles/App.css';


// function App() {
//     let user = {'authenticated': true, "username": 'kizii', "balance": 9999}

//     return (
//         <>
//         <header>
//             <Header logo={logo}/>
//         </header>
//         <main>
//             <Main/>
//         </main>
//         <footer className='bg-primary h-50'>
//             <Footer/>
//         </footer>
//         </>
//     );
// }

// export function App() {
//     return (
//         <>
//         <Header logo={logo}/>
//         <Main/>
//         <Footer/>
//         </>
//     );
// }

import Auth from './components/auth/Auth';
import Home from './components/home/Home';

export function App() {
    return (
        <div id="app">
            <Header logo={logo}/>
            <Main/>
            <Footer/>
        </div>
    );
}


export default App;
