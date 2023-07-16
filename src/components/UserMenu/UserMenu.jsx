import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/Auth/authOperations';
import { useAuth } from '../Hooks';

import css from './userMenu.module.css';


export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div className={css.user}>
                <p className={css.userName}>Welcome, {user.name} !</p>
            <button className={css.userButton} type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    );
}