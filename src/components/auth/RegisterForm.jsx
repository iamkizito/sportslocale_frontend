
function RegisterForm(props) {

    const submitForm = (event) => {
        let form = document.querySelector('.register_form')
        let email = document.querySelector("input[type='email']").value
        let password = document.querySelector(".password").value
        let confirm_password = document.querySelector(".confirm_password")
        if (!form.checkValidity()){
            form.querySelectorAll('input').forEach((input) => {
                console.log(form.checkValidity())
                if (input.checkValidity()) {
                    input.classList.add('valid')
                    input.classList.remove('invalid')
                } else {
                    input.classList.add('invalid')
                    input.classList.remove('valid')
                }
            })
        } else if (password !== confirm_password.value){
            confirm_password.classList.add('invalid')
            confirm_password.classList.remove('valid')
        } else {
            console.log(email, password)
            form.reset()
            confirm_password.style.border = ''
            event.preventDefault()
        }
    }

    return (
        <div id="register">
            <h1 className="text-center">Create an account</h1>
            <form action="" className="register_form">
                <input type="email" className='email form-control' required placeholder="email"/>
                <input type="password" className='password  form-control' required placeholder="password"/>
                <input type="password" className='confirm_password  form-control' required placeholder="confirm password"/>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Agree to Terms and conditions
                    </label>
                </div>
                <input type="button" className="btn btn-primary" onClick={(event) => submitForm(event)} value="Register" />
            </form>
        </div>
    );
}


export default RegisterForm