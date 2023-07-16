import { LoginForm } from 'components/LoginForm/LoginForm';

import css from './login.module.css'

export default function Login() {
    return (
        <div className={css.login}>
            <h1 className={css.title}>Log in</h1>
            <LoginForm />
        </div>
    );
}