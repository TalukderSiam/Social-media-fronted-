import { Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./Pages/Authenticaion/AuthenticationOne";
import Homepage from "./Pages/Homepage/Homepage";
import Message from "./Pages/Message/Message";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getProfileAction } from "./Redux/Auth/auth.action";



function App() {
  const {auth}=useSelector(store=>store)
  const dispatch = useDispatch();
  const jwt=localStorage.getItem("jwt");
  useEffect(() => {
    dispatch(getProfileAction(jwt));
  }, [jwt]);

  return (
    <div className="">
      <Routes>
        <Route
          path="/*"
          element={ auth.user? <Homepage /> : <Authentication />}
        ></Route>
        <Route path="/message" element={<Message />}></Route>
        <Route path="/*" element={<Authentication />}></Route>
      </Routes>
    </div>
  );
}

export default App;
