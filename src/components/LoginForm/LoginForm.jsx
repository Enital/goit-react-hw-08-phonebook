import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/authOperations';

import css from './loginForm.module.css';

export function LoginForm() {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <div className={css.login}>
            <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
                <label className={css.label}>Email</label>
                <input className={css.input} type="email" name="email" />
                <label className={css.label}>Password</label>
                <input className={css.input} type="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}