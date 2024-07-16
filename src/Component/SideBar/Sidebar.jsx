import React from "react";
import { NavigationMenu } from "./SideBarNavigation";
import { Avatar, Button, Card, Divider, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
const Sidebar = () => {
  const {auth} =useSelector(store=>store);
  const navigate =useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handlenavigate =(item)=>{
      if(item.title=="Profile"){
        navigate(`/profile/auth.user?.id)`)
      }
  };

  return (
    <Card className="card h-screen flex flex-col justify-between py-5">
      <div className="space-y-8 pl-5">
        <div className="">
          <span className="logo font-bold text-xl">KOTHA</span>
        </div>
        <div className="space-y-8">
          {NavigationMenu.map((item, index) => (
            <div
            onClick={()=>handlenavigate(item)}
              key={index}
              className="flex space-x-3 cursor-pointer items-center"
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Divider />

        <div className="pl-5 flex item-center justify-between pt-5">
          <div className="flex items-center space-x-3">
            <Avatar src="data:image/jpeg;base64,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" />
            <div>
              <p className="font-bold">{auth.user?.firstName +" "+auth.user?.lirstName}</p>
              <p className="Opacity-70">@{auth.user?.firstName.toLowerCase() +"_"+auth.user?.lirstName.toLowerCase()}</p>
            </div>
          </div>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;
