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
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExpandMore } from "@material-ui/icons";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction } from "../../Redux/Comment/Comment.action";
import { LikePostAction } from "../../Redux/Post/post.action";
import { isLikedByReqUser } from "../../Utils/isLikedByReqUser";
const PostCard = ({ item }) => {
  const [showComments, setShowComments] = useState(false);
  const handleShowComment = () => setShowComments(!showComments);
  const dispatch = useDispatch();
  const {post,auth}=useSelector(store=>store);

  const handleCreateComment = (content) => {
    const reqData = {
      postId: item.id,
      data: {
        content,
      },
    };
    dispatch(createCommentAction(reqData));
  };

  const handleLikePost=()=>{
    dispatch(LikePostAction(item.id))
  }

  return (
    <div>
      <Card>
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
          title={item.user.firstName + " " + item.user.lirstName}
          subheader={
            "@" +
            item.user.firstName.toLowerCase() +
            "_" +
            item.user.lirstName.toLowerCase()
          }
        />

        <CardMedia
          component="img"
          height="194"
          image={item.image}
          alt="Paella dish"
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item.caption}
          </Typography>
        </CardContent>

        <CardActions className="flex justify-between" disableSpacing>
          <div>
            <IconButton>
              {isLikedByReqUser(auth.user.id,item)? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
            </IconButton>

            <IconButton>
              <ShareIcon />
            </IconButton>

            <IconButton onClick={handleShowComment}>
              <CommentOutlinedIcon />
            </IconButton>
          </div>

          <div>
            <IconButton>
              {true ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
            </IconButton>
          </div>
        </CardActions>
        {showComments && (
          <section>
            <div className="flex item-center space-x-5 mx-3  my-5">
              <Avatar />
              <Input
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleCreateComment(e.target.value);
                    console.log("enter pressed....", e.target.value);
                  }
                }}
                className="w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2"
                placeholder="Write your comment"
              />
            </div>
            <Divider />

            <div className="mx-3 space-y-2 my-5 text-xs">
              <div>All comments </div>
              {item.comments?.map((comment) => (
                <div className="flex items-center space-x-5 border border-[#3b4054]">
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
                  <p>{comment.content}</p>
                </div>
              ))}
              <div></div>
            </div>
          </section>
        )}
      </Card>
    </div>
  );
};

export default PostCard;
