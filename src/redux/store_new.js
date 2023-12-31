import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlice';
import { contactsReducer } from './Contacts/contactSlice';
import { filtersReducer } from './Filter/filterSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsReducer,
        filter: filtersReducer,
    }
})

// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { authReducer } from './auth/slice';

// const middleware = [
//     ...getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }),
// ];

// export const store = configureStore({
//     reducer: {
//         auth: persistReducer({
//             key: 'auth',
//             storage,
//             whitelist: ['token'],
//         }, ),
//     },
//     middleware,
//     devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);
