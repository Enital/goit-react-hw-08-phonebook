import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/Auth/authOperations';
import { useAuth } from '../Hooks';

import css from './userMenu.module.css';


export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div className={css.user}>
            <p className={css.username}>Welcome, {user.name} !</p>
            <Button className={css.userButton} variant="outlined" type="button" onClick={() => dispatch(logOut())}>
                Logout
            </Button>
        </div>
    );
}