import { Card, Grid } from "@material-ui/core";
import React from "react";
import Loginn from "./Loginn";
import Registerr from "./Registerr";
import Homepage from "../Homepage/Homepage";
import { Route, Routes } from "react-router-dom";



const AuthenticationOne = () => {
  return (
    <div>
      <Grid container>
        <Grid className="h-screen w-screen relative">
          <img
            className="h-full w-full absolute top-0 left-0"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_uD62OH79FdiOdkbDKS3Vl6JIDuBuYlXUg&s"
            alt="Mobile Icons"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <Card
              className="card p-8"
              style={{
                backgroundColor: "rgba(255, 255, 255, .1)",
                width: "400px",
                padding: "15px",
                borderRadius: "10px",
                color:"white",
                 fontWeight: 'bold',
                  border: '2px solid white'
              }}
            >
              <div className="flex flex-col items-center mb-5 space-y-1">
                <h1 className="logo text-center">KOTHA</h1>
                <p className="text-center text-sm w-[70%]">
                  Share your feelings Here
                </p>
              </div>
              {/* Uncomment the following line to display the Login form */}
                
             { /*<Registerr  /> <Loginn />*/}
             <Routes>
         <Route path='/' element={<Loginn/>}></Route>
        <Route path='/login' element={<Loginn/>}></Route>
        <Route path='/register' element={<Registerr/>}></Route>
         

      </Routes>
             
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AuthenticationOne;
