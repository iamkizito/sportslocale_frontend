import { useEffect, useState } from "react";
import { host, endpoints } from "../../testData";
import { useNavigate } from "react-router-dom";
import {paths} from "../../variables";
import Spinner from "../utils/Spiner";
import Notice from "../utils/Notice";


const SignInForm = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formData, setFormData] = useState(null);

    const handleFormSubmit = async (event) => {
        // validate input

        // set the the formData state variable
        setFormData({email, password})

        // reset email and password form state variables
        setEmail('')
        setPassword('')
    }

    const {loading, notice} = useSiginInEffect(formData)

    return (
        <div id="signin">
            <h1 className="text-center">Sign In</h1>
            {notice && <Notice message={notice.msg} type={notice.type}/>}

            <form action="" className="signin_form">
                <input type="email" className='email form-control' required placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" className='password  form-control' required placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className="btn btn-primary" disabled={loading && true} onClick={handleFormSubmit}>
                    {loading && <Spinner/>} Sign In
                </button> 

                <div className="form-text text-muted">
                    <small><a className="" href="">Forgot Password?</a></small>
                </div>
            </form>
        </div>
    );
}


export default SignInForm;




const useSiginInEffect = (formData) => {

    const [loading, setLoading] = useState(false)
    const [notice, setNotice] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const postData = async () => {
            // used for testing, to be removed
            localStorage.setItem('accessToken', 'xxxx');
            navigate(paths.home)
            // till here

            setLoading(true);
            const url = host + endpoints.login;
        
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            };

            try {
                const response = await fetch(url, options);
                const responseData = await response.json()  
                console.log(responseData)

                if (responseData.status === 'success') {
                    localStorage.setItem('accessToken', responseData.access_token);
                    setLoading(false)
                    navigate(paths.home)
                } else {
                    setNotice({msg: responseData.message, type: 'warning'})
                    setLoading(false)
                }

            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }

        
        formData && postData()

    }, [formData])

    return {loading, notice}
}