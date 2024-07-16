import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import MiddlePart from "../../Component/MiddlePart/MiddlePart";
import Reels from "../../Component/Reels/Reels";
import CreateReelsForm from "../../Component/Reels/CreateReelsForm";
import Profile from "../Profile/Profile";
import HomeRigt from "../../Component/HomeRight/HomeRigt";
import Sidebar from "../../Component/SideBar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../../Redux/Auth/auth.action";


const Homepage = () => {
  const location = useLocation();
  const jwt=localStorage.getItem("jwt");
  const dispatch =useDispatch();
  const {auth} =useSelector(store=>store)

  useEffect(() => {
    dispatch(getProfileAction(jwt));
  }, [jwt]);
  
  return (
    <div className="px-20">
      <Grid container spacing={0}>
        <Grid item xs={0} lg={3}>
          <div className="sticky top-0 w-full">
            <Sidebar />
          </div>
        </Grid>

        <Grid
          lg={location.pathname === "/" ? 6 : 9}
          item
          className="px-5 flex justify-center"
          xs={12}
        >
          <Routes>
            <Route path="/" element={<MiddlePart />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/create-reels" element={<CreateReelsForm />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Grid>

        { location.pathname==='/' && <Grid item lg={3} className="position-relative">
          <div className="sticky top-0 w-full ">
             <HomeRigt/>
          </div>
        </Grid>}
      </Grid>
    </div>
  );
};

export default Homepage;
