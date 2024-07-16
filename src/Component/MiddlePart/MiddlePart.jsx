import { Avatar, Input } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import StoryCirclee from "./StoryCirclee";
import { Card, IconButton } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import ArticleIcon from "@mui/icons-material/Article";
import PostCard from "../Post/PostCard";
import CreatePostModel from "../CreatePost/CreatePostModel";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostAction } from "../../Redux/Post/post.action";
const story = [11, 1, 1, 1, 1];

const MiddlePart = () => {
  const dispatch =useDispatch();
  const {post}=useSelector(store=>store);
  const[openCreatePostModel,setOpenCreatePostModel] =useState(false);
  const  handleCloseCreatePostModel =()=>setOpenCreatePostModel(false);
  const handleOpenCreatePostModel = () => {
    setOpenCreatePostModel(true);
    console.log("Opne post model",openCreatePostModel);
  };

  useEffect(()=>{
    dispatch(getAllPostAction());
  },[post.newComment]);

  
  return (
    <div className="px-20">
      <Card className="flex  item-center p-5 rounded-b-md">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar style={{ width: "5rem", height: "5rem" }}>
            {" "}
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>New</p>
        </div>
        {story.map((item) => (
          <StoryCirclee />
        ))}
      </Card>

      <Card className="p-5 mt-5">
        <div className="flex justify-between ">
          <Avatar />
          <input
          onClick={handleOpenCreatePostModel}
            readOnly
            type="text"
            className="outline-none w-[90%] bg-slate-100 rounded-full px-5 
        bg-transparent border-[#3b4054] border"
          />
        </div>
        <div className=" flex space-x-9 mt-5 justify-center">
          <div className="flex items-center ">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <ImageIcon />
            </IconButton>
            <span>Media</span>
          </div>

          <div className="flex items-center ">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <VideocamIcon />
            </IconButton>
            <span>video</span>
          </div>

          <div className="flex items-center ">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <ArticleIcon />
            </IconButton>
            <span>Article</span>
          </div>
        </div>
      </Card>

      <div className="mt-5 space-y-5"> 
      {post.posts.map((item) => (
          <PostCard item={item}/>
        ))}
      </div>
      <div>
        <CreatePostModel handleClose={ handleCloseCreatePostModel} open={openCreatePostModel}/>
      </div>
    </div>
  );
};

export default MiddlePart;
