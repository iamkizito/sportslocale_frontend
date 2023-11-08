import { Link } from "react-router-dom";
import paths from "../../paths";
import arrow from "../../images/arrow.png"
import copy from "../../images/copy.svg"
import { useEffect, useState } from "react";

const Task = (props) => {

    const task = props.task

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert(`Copied to clipboard - ${text}`);
        });
    }

    const returnStatus = (task) => {
        switch (task.status) {
            case 'processing':
                return 'text-info'
            case 'failed':
                return 'text-danger'
            case 'success':
                return 'text-success'
            default:
                return ''
        }
    }

    return (
        <div className="task">
            <div className="top">
                <div className="left">
                    <div className="date">
                        <span className="name">Date: </span>
                        <span className="value">{ task.date }</span></div>
                    <div className="task_key" data-key={ task.key }>
                        <span className="name">Key: </span>
                        <span className="value">{ task.key.substring(0, 5)}...</span>
                    </div>
                </div>
                <div className="right status-area">
                    <span>Status: </span>
                    <span className={`status ${returnStatus(task)}`} data-status={ task.status }>{task.status}</span>
                </div>
            </div>
            <div className="center booking-code-area">
                <div className="from">
                    <div className="booking_code">{task.booking_code}</div>
                    <div className="platform">{task.platform_from}</div>
                </div>
                <div className="arrow">
                    <img src={arrow} alt="arrow" />
                </div>
                <div className="to">
                    <div className="result">
                        <div className="booking_code">{task.result}</div>
                        <img className="copy_image" src={copy} alt="" onClick={() => copyToClipboard(task.result)}/>
                    </div>
                    <div className="platform">{task.platform_to}</div>
                </div>
            </div>
            <div className="bottom">
                {task.completed ? (
                    <>
                    <Link to={paths.home} className="view-details d-block">View details {'>'}</Link>
                    <div className="progress d-none">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: '0%' }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </>
                ) : (
                    <>
                    <Link to={paths.home} className="view-details d-none">View details {'>'}</Link>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: '0%' }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </>
                )}
            </div>


        </div>
    );
}

export default Task;
