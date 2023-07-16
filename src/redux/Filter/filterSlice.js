import { createSlice } from '@reduxjs/toolkit';

const filter = '';

export const filtersSlice = createSlice({
    name: 'filter',
    initialState: filter,
    reducers: {
        filterContact(state, action) {
            return action.payload;
        },
    },
});

export const { filterContact } = filtersSlice.actions;
export default filtersSlice.reducer;