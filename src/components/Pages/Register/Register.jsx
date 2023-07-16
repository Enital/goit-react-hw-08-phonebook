import { RegisterForm } from 'components/RegisterForm/RegisterForm';

import css from './register.module.css'
export default function Register() {
    return (
        <div className={css.register}>
            <h1 style={{ textAlign: 'center' }}>Registration</h1>
            <RegisterForm />
        </div>
    );
}