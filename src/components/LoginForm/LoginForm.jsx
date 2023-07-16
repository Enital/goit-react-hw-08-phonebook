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
        <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
            <label className={css.label}>
                Email
                <input className={css.input} type="email" name="email" />
            </label>
            <label className={css.label}>
                Password
                <input className={css.input} type="password" name="password" />
            </label>
            <button type="submit">Login</button>
        </form>
    );
}