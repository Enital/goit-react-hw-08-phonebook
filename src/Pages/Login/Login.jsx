import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../redux/auth';

import css from './login.module.css'

export default function Login() {
    // const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        // dispatch(authOperations.logIn({ email, password }));
        // setEmail('');
        // setPassword('');
    };

    return (
        <div className={css.formContainer}>
            <h1>Login</h1>

            <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>

                <input
                    placeholder='E-mail'
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className={css.input}
                    />

                <input
                    placeholder='Password'
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className={css.input}
                    />

                <button type="submit" className={css.btn}>Log In</button>
            </form>
        </div>
    );
}