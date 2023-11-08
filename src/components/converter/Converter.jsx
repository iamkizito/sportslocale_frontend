import Header from "../utils/Header";
import Main from "../utils/Main";
import Footer from "../utils/Footer";
import Tasks from "./Tasks";
import ConverterForm from "./ConverterForm";
import logo from '../../images/sportslocale.png'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import paths from "../../paths";
import { host, endpoints } from "../../testData";
import { useNavigate } from "react-router-dom";

const Converter = (props) => {
    const test_tasks = [{
        "key": '12345',
        "date": '12-10-13 14:32:00',
        "platform_from": 'bet9ja',
        "platform_to": 'easywin',
        "booking_code": 'KDVD6F',
        "result": 'RVFD2D',
        "status": 'failed',
        "completed": true,
    }]

    const [tasks, setTasks] = useState(test_tasks)
    const [platforms, setPlatforms] = useState(['easywin', 'bet9ja'])

    const [loading, error, data] = useConverterEffect()

    return (
        <div id="converter">
            <Header logo={logo} />
            <Main>
                <section id="new_task_section">
                    <h2 className="">Booking code converter</h2>
                    <div className="converter_form">
                        <ConverterForm platforms={platforms}/>
                    </div>
                </section>

                <section id="recent_tasks_section">
                    <h3>Recent Tasks</h3>
                    <div className="recent_tasks">
                        <Tasks tasks={tasks}/>
                    </div>
                    <Link className="view-all" to={paths.history}>View all tasks</Link>
                </section>
            </Main>
            <hr />
            <Footer/>
        </div>
    )
}

export default Converter;


const useConverterEffect = () => {
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const dataRequired = {
        'user': {},
        'platforms': [],
        'tasks': []
    }

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const url = host + endpoints.converter;
    
            const options = {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            }
    
            try {
                const response = await fetch (url, options);
                if (response.status === 401) {
                    navigate(paths.auth)
                    return
                }
    
                const responseData = await response.json();
                console.log(responseData)
                if (responseData.status == 'success') {
                    setData(response.data)
                } else {
                    setError(response.data)
                }
            } catch (error) {
                console.log(error)
                setError('An error occured')
            }
            setLoading(false)
        }

        getData()
    }, [])

    return {loading, error, data}
}





