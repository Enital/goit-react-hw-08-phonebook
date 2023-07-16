import Loader from "components/Loader/Loader";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContact, deleteContact } from "../../redux/Contacts/operations";
import { getIsLoading, getVisibleContacts } from "../../redux/selectors";
import css from './contactList.module.css'

function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(getVisibleContacts);
    const isLoading = useSelector(getIsLoading);
    // console.log(contacts);

    useEffect(() => {
        dispatch(fetchContact());
    }, [dispatch]);

    const deleteContactBtn = id => {
        dispatch(deleteContact(id));
    }
    
    return (
        <>
            {isLoading && <Loader />}
            <h2>Contacts</h2>
            <ul className={css.list}>
                {contacts.map(({ id, name, number }) => {
                    return (<>
                        <li key={id} className={css.item}>
                            <div className={css.contact}>
                                <span className={css.contactName}>{name}</span>
                                <span>{number}</span>
                            </div>
                            <button className={css.delete} type='button' onClick={() => deleteContactBtn(id)}>Delete contact</button>
                        </li>
                    </>
                    )
                })}
            </ul>
        </>
    )
}

export default ContactList;