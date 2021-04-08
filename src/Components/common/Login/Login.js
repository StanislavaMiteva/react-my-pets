import { auth } from '../../../utils/firebase';

import UserFormView from "../UserFormView/UserFormView";

const Login = ({
    history
}) => {

    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        auth.signInWithEmailAndPassword(username, password)
            .catch(error => {
                console.log(error, 'Error - login user');
            })
            .then(() => {
                history.push("/")
            })
    };

    return (
        <section class="login">
            <UserFormView
                onSubmitHandler={onLoginFormSubmitHandler}
                formTitle="Login"
            />
            {/* <form onSubmit={onLoginFormSubmitHandler}>
                <fieldset>
                    <legend>Login</legend>
                    <p className="field">
                        <label htmlFor="username">Username</label>
                        <span className="input">
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                            />
                            <span className="actions"></span>
                            <i className="fas fa-user"></i>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                            />
                            <span className="actions"></span>
                            <i className="fas fa-key"></i>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form> */}
        </section>
    );
}

export default Login;