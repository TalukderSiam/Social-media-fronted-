import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Input,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction } from "../../Redux/Comment/Comment.action";
import { LikePostAction } from "../../Redux/Post/post.action";
import { isLikedByReqUser } from "../../Utils/isLikedByReqUser";

const ReelsCard = ({ item }) => {
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const { auth,post,reels} = useSelector((store) => store);

  const handleCreateComment = (content) => {
    const reqData = {
      reelsId: item.id,
      data: {
        content,
      },
    };
    dispatch(createCommentAction(reqData));
  };

  {/*const handleLikePost = () => {
    dispatch(LikePostAction(item.id));
  };*/}


  const handleKeyPress = (e) => {
    if (e.key === "Enter" && comment.trim()) {
      handleCreateComment(comment);
      setComment(""); // Clear the input field
    }
  };

  return (
    <Card className="max-w-[650px] mb-5">
      {" "}
      {/* Set a maximum width and add bottom margin */}
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={item.user.image}
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${item.user.firstName} ${item.user.lirstName}`}
        subheader={
          "@" +
          item.user.firstName.toLowerCase() +
          "_" +
          item.user.lirstName.toLowerCase()
        }
      />
      {item.video && (
        <img
          src={item.video}
          alt="video"
          style={{ width: "100%", maxHeight: "500px", objectFit: "contain" }}
        />
      )}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.caption}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-between" disableSpacing>
        <div>
        
          <IconButton> {/*onClick={handleLikePost}
         isLikedByReqUser(auth.user.id, item)*/}
         
            {true ? (
              
              <FavoriteIcon />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </IconButton>

          <IconButton>
            <ShareIcon />
          </IconButton>

          <IconButton onClick={() => setShowComments(!showComments)}>
         { /*{item.comments.length==0? "":item.comments.length }*/}
          
            <CommentOutlinedIcon />
          </IconButton>
        </div>

        <div>
          <IconButton>
            <BookmarkIcon />
          </IconButton>
        </div>
      </CardActions>
      {showComments && (
        <section>
          <div className="flex item-center space-x-5 mx-3 my-5">
            <Avatar />
            <Input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2"
              placeholder="Write your comment"
            />
          </div>
          <Divider />

          <div className="mx-3 space-y-2 my-5 text-xs">
            <div>All comments</div>
            {item.comments?.map((comment) => (
              <div
                key={comment.id}
                className="flex items-center space-x-5 border border-[#3b4054] p-2 rounded-md"
              >
               
                <Avatar
                  sx={{
                    height: "2rem",
                    width: "2rem",
                    fontSize: ".8rem",
                    // Replace "tia" with the desired background color if needed
                  }}
                >
                  {comment.user.firstName[0]}
                </Avatar>
                <p style={{ color: "blue",fontSize: 17 }}>{comment.user.firstName} {comment.user.lirstName}: </p>
                 <br/>
                <p>{comment.content}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </Card>
  );
};


export default ReelsCard;
