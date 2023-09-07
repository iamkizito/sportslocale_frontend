import {Routes, Route, Link} from 'react-router-dom'



function Nav (props) {
    return (
        <nav>
            <ul>
                <Link to='/' className=''>Home</Link>
                <Link to='/' className=''>converter</Link>
                <Link to='/' className=''>History</Link>
                <Link to='/' className=''>Contact Us</Link>
                <Link to='/' className=''>About Us</Link>
            </ul>
            <Routes>
                <Route path='/' element={}></Route>
            </Routes>
        </nav>
    );
}