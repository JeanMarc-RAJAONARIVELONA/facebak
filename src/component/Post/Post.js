import React from "react";
import Navbar from "../Navbar/Navbar";
import FriendRequest from "../FriendRequest/FriendRequest";
import Aside from "../Aside/Aside";
import CreatePost from "../CreatePost/CreatePost";
import Story from "../Story/Story";
import "./Post.css";
function Post() {
  return (
    <>
      <Navbar />
      <Story />
      <CreatePost />
      <FriendRequest />
      <Aside />
    </>
  );
}

export default Post;
