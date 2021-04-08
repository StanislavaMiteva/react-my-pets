import { auth } from '../../../utils/firebase';
import UserFormView from '../UserFormView/UserFormView';

const Register = ({
    history
}) => {

    const onRegisterFormSubmitHandler = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        auth.createUserWithEmailAndPassword(username, password)
            .catch(error => {
                console.log(error, 'Error - regiter user');
            })
            .then(() => {
                console.log('Register')
                history.push('/')
            })
    }
    return (
        <section class="register">
            <UserFormView
                onSubmitHandler={onRegisterFormSubmitHandler}
                formTitle="Register"
            />
        </section>
    );
}

export default Register;