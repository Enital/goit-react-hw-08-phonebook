import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { register } from '../../redux/Auth/authOperations';
import {selectContactsList} from '../../redux/selectors'

import css from './registerForm.module.css';

export function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const contacts = useSelector(selectContactsList);
    const dispatch = useDispatch();


    const handleNameChange = event => {
        setName(event.currentTarget.value)
    };

    const handleEmailChange = event => {
        setEmail( event.currentTarget.value );
    };

    const handlePasswordChange = event => {
        setPassword( event.currentTarget.value );
    };

    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(contacts);
        // const form = e.currentTarget;
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value
        const password = e.target.elements.password.value;
        console.log(name,email,password)
        dispatch(
            register({ name, email, password })
        );
        reset();
    };

    return (
        <div className={css.register}>
            <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
                <label className={css.label}>Name</label>
                <input className={css.input}
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={handleNameChange} />
                <label className={css.label}>Email</label>
                <input className={css.input}
                    type="text"
                    name="email"
                    required
                    value={email}
                    onChange={handleEmailChange} />
                <label className={css.label}>Password</label>
                <input className={css.input}
                    type="text"
                    name="password"
                    required
                    value={password}
                    onChange={handlePasswordChange} />
                
                <button type="submit">Register</button>
            </form>
        </div>
    );
}