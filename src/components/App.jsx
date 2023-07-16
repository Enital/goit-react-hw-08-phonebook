import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'redux/Auth/authOperations';
import { useAuth } from './Hooks';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoutes';

const HomePage = lazy(() => import('../components/Pages/Home/Home'));
const LoginPage = lazy(() => import('../components/Pages/Login/Login'));
const ContactsPage = lazy(() => import('./Pages/RootContact/rootContact'));
const RegisterPage = lazy(() => import('../components/Pages/Register/Register'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (<Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/contact"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contact"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contact" component={<LoginPage />} />
          }
        />
      </Route>
    </Routes>)
    
  );
}


export default App;
// import { lazy, useEffect } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout/Layout';
// import { RestrictedRoute } from './RestrictedRoutes';
// import { PrivateRoute } from './PrivateRoute';
// import { useDispatch } from 'react-redux';
// import { useAuth } from './Hooks';
// import { refreshUser } from 'redux/Auth/authOperations';

// const HomePage = lazy(() => import('../components/Pages/Home/Home'));
// const LoginPage = lazy(() => import('../components/Pages/Login/Login'));
// const ContactsPage = lazy(() => import('./Pages/RootContact/rootContact'));
// const RegisterPage = lazy(() => import('../components/Pages/Register/Register'));

// function App () {
//   const dispatch = useDispatch();
//   const { isRefreshing } = useAuth();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <b>Refreshing user...</b>
//   ) : (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//         <Route
//           path="/register"
//           element={
//             <RestrictedRoute
//               redirectTo="/contacts"
//               component={<RegisterPage />}
//             />
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
//           }
//         />
//         <Route
//           path="/contacts"
//           element={
//             <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
//           }
//         />
//       </Route>
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };

// export default App;