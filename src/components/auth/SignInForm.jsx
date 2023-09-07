

function SignInForm(props) {

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
        <div id="signin">
            <h1 className="text-center">Sign In</h1>
            <form action="" className="signin_form">
                <input type="email" className='email form-control' required placeholder="email"/>
                <input type="password" className='password  form-control' required placeholder="password"/>
                <input type="button" className="btn btn-primary" onClick={(event) => submitForm(event)} value="Sign In" />

                <div className="form-text text-muted">
                    <small><a className="" href="">Forgot Password?</a></small>
                </div>
            </form>
        </div>
    );
}


export default SignInForm