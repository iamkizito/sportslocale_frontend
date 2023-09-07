import Auth from './components/auth/Auth';
import Home from './components/home/Home';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export function App() {
    let routes = {
        "home": "/",
        "auth": "/auth",
        "converter": "/converter",
        "history": "/history",
        "contact": "/contact",
        "about": "/about",
        "profile": "/profile",
        "setting": "/setting",
    }

    return (
        <div id="app">
            <Router>
                <Routes>
                    <Route exact path={routes.home} element={<Home/>}/>
                    <Route exact path={routes.auth} element={<Auth/>}/>
                    {/* <Route component={NotFound} /> */}
                </Routes>
            </Router>
        </div>
    );
}


export default App;
