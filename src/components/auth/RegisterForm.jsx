import { useEffect, useRef, useState } from "react";
import { endpoints, host } from "../../testData";
import Spinner from "../utils/Spiner";
import Notice from "../utils/Notice";


function RegisterForm(props) {
    const formRef = useRef()
    const [formData, setFormdata] = useState()

    const handleFormSubmit = (event) => {
        const form = formRef.current
        const email = form.email.value
        const password = form.password.value

        const isValid = form.checkValidity();

        if (isValid) {
            if (password === form.confirmPassword.value) {
                setFormdata({email, password})
                form.reset()
                form.querySelectorAll('input').forEach((input) => {
                    input.classList.remove('invalid', 'valid')
                })
            }else {
                form.confirmPassword.classList.add('invalid')
                form.confirmPassword.classList.remove('valid')
            }
        } else {
            form.reportValidity()
            form.querySelectorAll('input').forEach((input) => {
                if (input.checkValidity()) {
                    input.classList.add('valid')
                    input.classList.remove('invalid')
                } else {
                    input.classList.add('invalid')
                    input.classList.remove('valid')
                }
            })
        }
    }

    const {loading, notice} = useRegistrationEffect(formData)

    return (
        <div id="register">
            <h1 className="text-center">Create an account</h1>
            {notice && <Notice message={notice.msg} type={notice.type}/>}

            <form action="" ref={formRef} className="register_form">
                <input type="email" name="email" className='email form-control' required placeholder="email"/>
                <input type="password" name="password" className='password  form-control' required placeholder="password"/>
                <input type="password" name="confirmPassword" className='confirm_password  form-control' required placeholder="confirm password"/>
                <div className="form-check">
                    <input name="agreeCheck" required className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Agree to Terms and conditions
                    </label>
                </div>
                <button className="btn btn-primary" disabled={loading && true} onClick={(event) => handleFormSubmit(event)} value="Register">
                    {loading && <Spinner/>} Register
                </button>               
            </form>
        </div>
    );
}


export default RegisterForm;






const useRegistrationEffect = (formData) => {
    const [loading, setLoading] = useState(false);
    const [notice, setNotice] = useState(null);
  
    useEffect(() => {

        const postData = async () => {
            setLoading(true);
            const url = host + endpoints.register;
    
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            };
    
            try {
                const response = await fetch(url, options);
                const responseData = await response.json();
                console.log(responseData);
        
                if (responseData.status === 'success') {
                    const message = 'Registration successful';
                    setNotice({ msg: message, type: 'success' });
                    setLoading(false);
                } else {
                    const message = 'Registration failed!';
                    setNotice({ msg: message, type: 'warning' });
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
                const message = 'An error occurred, please try again';
                setNotice({ msg: message, type: 'warning' });
                setLoading(false);
            }
        };
    
        formData && postData();

    }, [formData]);
  
    return { loading, notice };
  };





