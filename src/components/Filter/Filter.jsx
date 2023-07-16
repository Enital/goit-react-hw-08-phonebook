import { useDispatch, useSelector } from "react-redux";
import { filterContact } from '../../redux/Filter/filterSlice';

import css from './filter.module.css';

function Filter() {
    const dispatch = useDispatch();
    const filter = useSelector(state=> state.filter)

    return (
        <div className={css.filter}>
            <h3 className={css.title}>Find contacts by name</h3>
                <input
                    type="text"
                    name='filter'
                    value={filter}
                    onChange={e => { dispatch(filterContact(e.target.value)) }}
                    className={css.input}
                />
        </div>
    )
};

export default Filter;