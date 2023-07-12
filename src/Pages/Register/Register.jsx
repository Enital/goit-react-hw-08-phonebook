import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../redux/auth';

import css from './register.module.css'


export default function RegisterView() {
    // const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
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
        // dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        
        <div className={css.formContainer}>
            <h1>Register</h1>

            <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
                {/* <label className={css.registerLabel}>
                    Name */}
                <input type="text"
                    placeholder='Name'
                        name="name"
                        required
                        value={name}
                        onChange={handleChange}
                        className={css.input}
                    />
                {/* </label> */}

                {/* <label className={css.registerLabel}>
                    Email */}
                <input
                    placeholder='E-mail'
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className={css.input}
                    />
                {/* </label> */}

                {/* <label className={css.registerLabel}>
                    Password */}
                <input
                    placeholder='Password'
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className={css.input}
                    />
                {/* </label> */}

                <button type="submit" className={css.btn}>Register</button>
            </form>
        </div>
    );
};