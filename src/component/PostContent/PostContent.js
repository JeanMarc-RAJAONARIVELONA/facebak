import { Box } from "@mui/material";
import React from "react";
import CreatePost from "../CreatePost/CreatePost";
import Story from "../Story/Story";
import Post from "../Post/Post";
function GroupContent() {
  return (
    <Box flex={4}>
      <Story />
      <CreatePost />
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  );
}

export default GroupContent;
