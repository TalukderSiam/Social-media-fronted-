import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import AuthenticationOne from "./Pages/Authenticaion/AuthenticationOne";
import Homepage from "./Pages/Homepage/Homepage";
import Message from "./Pages/Message/Message";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getProfileAction } from "./Redux/Auth/auth.action";
import Register from "./Pages/Authenticaion/Registerr";
import Profile from "./Pages/Profile/Profile";

function App() {
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getProfileAction(jwt));
    }
  }, [jwt, dispatch]);

  return (
    <div className="">
      <Routes>
        <Route
          path="/*"
          element={auth.user ? <Homepage /> : <AuthenticationOne />}
        />

        <Route
          path="/message"
          element={auth.user ? <Message /> : <AuthenticationOne />}
        />

       
      </Routes>
    </div>
  );
}

export default App;
