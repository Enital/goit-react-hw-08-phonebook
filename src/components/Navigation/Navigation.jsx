import { NavLink } from 'react-router-dom';
import { useAuth } from '../Hooks';


import css from './navigation.module.css';

export function Navigation() {
    const { isLoggedIn } = useAuth();
    return (
        <nav>
            <NavLink className={css.link} to="/">
                Home
            </NavLink>

            {isLoggedIn && (
                <NavLink className={css.link} to="/contact">
                    Contact
                </NavLink>
            )}
        </nav>
    );
}