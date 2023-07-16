import {ContactForm} from "../../ContactForm/ContactForm"
import ContactList from "../../ContactList/ContactList"
import Filter from "../../Filter/Filter"
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { fetchContact } from '../../../redux/Contacts/operations';
import { getError, getIsLoading } from 'redux/selectors';

import css from './rootContact.module.css'

export default function RootContacts() {
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContact());
    }, [dispatch]);

    return (
        <div className={css.contacts}>
            <ContactForm />
            <div className={css.contactsList}>
                <Filter />
                <ContactList />
            </div>
            

            {isLoading && !error}
        </div>
    )
}