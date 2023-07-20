import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Login = React.lazy(() => import("../login/Login"));
const Signup = React.lazy(() => import("../signup/signup"));
const Profile = React.lazy(() => import("../profile/Profile"));
const Cart = React.lazy(() => import("../cart/Cart"));
const BookSquare = React.lazy(() => import("../booksquare/BookSquare"))
const Body = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
          <Route path="/" element={<BookSquare/>} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/profile" element={<Profile/>} /> 
            <Route path="/cart" element={<Cart/>} /> 
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default Body;
