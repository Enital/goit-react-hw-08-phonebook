import Contacts from "Pages/Contacts/Contacts";
import Home from "Pages/Home/Home";
import Login from "Pages/Login/Login";
import Register from "Pages/Register/Register";
// import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
// import Layout from "./Layout/Layout";
// import Loader from "./Loader/Loader";

export const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/contacts" element={<Contacts/>} /> */}
      </Routes>
    </div>
    // <Suspense fallback={<Loader/>}>
    //   <Routes>
    //     <Route path="/" element={<Layout />}
    //       // <Route path="login" element={<Login />}
    //     // </Route>
    //   </Routes>
    // </Suspense>
    // <Suspense fallback={<Loader />}>
      // <Routes>
      //   <Route path="/" element={<Layout />}>
      //     <Route index element={<Login />} />
      //     <Route path="register" element={<Register />} />
      //     <Route path="contacts" element={<Contacts />} />
        
      //     {/* <Route path="movies/:movieId" element={<MovieDetail />} >
      //       <Route path="cast" element={<Casts />} />
      //       <Route path="reviews" element={<Reviews/> } />
      //     </Route>
      //     <Route path="*" element={<NotFound />}/> */}
      //   </Route>
      // </Routes>
    // </Suspense>
  );
};