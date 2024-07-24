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


const CreatePostModel = ({ open, handleClose }) => {
  const [selectedImage, setSelectedImage] = useState(""); // Changed setSelectImage to setSelectedImage
  const [selectedVideo, setSelectedVideo] = useState(""); // Changed setSelectVideo to setSelectedVideo
  const [isLoading, setIsLoading] = useState(false);
  const dispatch =useDispatch();
  const { auth } = useSelector((store) => store);

  const handleSelectImage = async(event) => {
    setIsLoading(true);
   const imageUrl =await UploadToCloud(event.target.files[0],"image");
   setSelectedImage(imageUrl);
   setIsLoading(false);
   formik.setFieldValue("image",imageUrl);
  };

  const handleSelectVideo =async (event) => {
    setIsLoading(true);
   const videoUrl =await UploadToCloud(event.target.files[0],"image");
   setSelectedVideo(videoUrl);
   setIsLoading(false);
   formik.setFieldValue("image",videoUrl);
  };

  const formik = useFormik({
    initialValues: {
      caption: "",
      image: "",
      video: ""
    },
    onSubmit: (values) => {
      console.log("Form values:", values);
      dispatch(createPostAction(values));
      window.location.reload(); 
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
              placeholder="Write your post"
              rows={4}
              className="w-full mt-3 border border-[#3b4054]"
              value={formik.values.caption}
              onChange={formik.handleChange} // Formik handler for input change
            />

            <div className="flex space-x-3 items-center mt-5">
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSelectImage} // Corrected event handler name
                  style={{ display: "none" }}
                  id="image-input"
                />
                <label htmlFor="image-input">
                  <IconButton color="primary" component="span">
                    <ImageIcon />
                  </IconButton>
                </label>
                <span>Image</span>
              </div>
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

            {selectedImage && (
              <div>
                <img src={selectedImage} alt="Selected" className="h-[10rem] mt-3" />
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

export default CreatePostModel;
