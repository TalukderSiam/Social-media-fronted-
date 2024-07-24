
import React, { useState } from "react";
import { Modal, Box, Button, CircularProgress, Backdrop, IconButton, Avatar } from "@mui/material";
import { Formik, Form, Field, useFormik } from "formik"; // Changed import to include Formik and Field
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import { UploadToCloud } from "../../Utils/UploadToCloud";
import { Await } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction } from "../../Redux/Post/post.action";
import { createCommentAction } from "../../Redux/Comment/Comment.action";
import { createReelsAction } from "../../Redux/Reels/Reels.action";

const CreateReelsForm = ({ open, handleClose }) => {
   
    const [selectedVideo, setSelectedVideo] = useState(""); // Changed setSelectVideo to setSelectedVideo
    const [isLoading, setIsLoading] = useState(false);
    const dispatch =useDispatch();
    const { auth } = useSelector((store) => store);

  
    const handleSelectVideo =async (event) => {
      setIsLoading(true);
     const videoUrl =await UploadToCloud(event.target.files[0],"video");
     setSelectedVideo(videoUrl);
     setIsLoading(false);
     formik.setFieldValue("video",videoUrl);
    };
  
    const formik = useFormik({
      initialValues: {
        caption: "",
        video: ""
      },
      onSubmit: (values) => {
        console.log("Form valuesssss:", values);
        dispatch(createReelsAction(values));
      }
    });
  
   
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 500, bgcolor: "background.paper", boxShadow: 24, p: 4, borderRadius: ".6rem", outline: "none" }}>
          <Formik initialValues={formik.initialValues} onSubmit={formik.handleSubmit}>
            <Form>
              <div className="flex space-x-4 items-center">
                <Avatar />
  
                <div>
                  <p className="font-bold text-lg">   {auth.user?.firstName + " " + auth.user?.lirstName}</p>
                  <p className="text-sm">@{auth.user?.firstName.toLowerCase() + "_" + auth.user?.lirstName.toLowerCase()}</p>
                </div>
              </div>
  
              <Field
                as="textarea"
                name="caption"
                placeholder="Write about your reels"
                rows={4}
                className="w-full mt-3 border border-[#3b4054]"
                value={formik.values.caption}
                onChange={formik.handleChange} // Formik handler for input change
              />
  
              <div className="flex space-x-3 items-center mt-5">
               
                <div>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleSelectVideo} // Corrected event handler name
                    style={{ display: "none" }}
                    id="video-input"
                  />
                  <label htmlFor="video-input">
                    <IconButton color="primary" component="span">
                      <VideocamIcon />
                    </IconButton>
                  </label>
                  <span>Video</span>
                </div>
              </div>
  
              {selectedVideo && (
                <div>
                  <img src={selectedVideo} alt="Selected" className="h-[10rem] mt-3" />
                </div>
              )}
  
              <div className="flex w-full justify-end mt-3">
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isLoading}
                  sx={{ borderRadius: "1.5rem" }}
                >
                  {isLoading ? <CircularProgress size={24} color="inherit" /> : "Post"}
                </Button>
              </div>
            </Form>
          </Formik>
  
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Box>
      </Modal>
    );
  };
  

export default CreateReelsForm;
