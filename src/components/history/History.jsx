import Header from "../utils/Header";
import Main from "../utils/Main";
import Footer from "../utils/Footer";
import Tasks from "../converter/Tasks";
import logo from '../../images/sportslocale.png'
import { useState, useEffect, useRef } from "react";
import { user, tasks as ttasks } from "../../testData";

const History = (props) => {
    const [tasks, setTasks] = useState(ttasks)
    const [selected, setSelected] = useState('all')

    const handleSelected = (event) =>  {
        let id = event.target.id
        setSelected(id)
    }

    const isSelected = (id) => {
        if (selected === id) {
            return 'selected'
        } else {
            return ''
        }
    }

    return (
        <div id="history">
            <Header logo={logo} />
            <Main>
                <section className="wrapper">
                    <div className="filters">
                        <div id='all' className={`filter ${isSelected('all')}`} onClick={handleSelected}>All</div>
                        <div id='pending' className={`filter ${isSelected('pending')}`} onClick={handleSelected}>Pending</div>
                        <div id="failed" className={`filter ${isSelected('failed')}`} onClick={handleSelected}>Failed</div>
                        <div id="success" className={`filter ${isSelected('success')}`} onClick={handleSelected}>Success</div>
                    </div>
                    <div className="tasks">
                        <Tasks tasks={tasks}/>
                    </div>
                </section>
            </Main>
            <hr />
            <Footer/>
        </div>
    )
}

export default History;





