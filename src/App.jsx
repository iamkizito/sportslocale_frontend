import Auth from './components/auth/Auth';
import Home from './components/home/Home';
import Converter from './components/converter/Converter';
import History from './components/history/History';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {paths} from './variables';
import './styles/App.css';

export function App() {

    return (
        <div id="app">
            <Router>
                <Routes>
                    <Route exact path={paths.home} element={<Home/>}/>
                    <Route exact path={paths.auth} element={<Auth/>}/>
                    <Route exact path={paths.converter} element={<Converter/>}/>
                    <Route exact path={paths.history} element={<History/>}/>
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Routes>
            </Router>
        </div>
    );
}


export default App;
