import React from "react";
import "./FriendRequest.css";
import { Box } from "@mui/material";
import Request from "../Request/Request";
function FriendRequest() {
  return (
    <Box
        boxShadow={"1px 1px 5px #ccc"}
      flex={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Request/>
      <Request/>
      <Request/>
      <Request/>
    </Box>
  );
}

export default FriendRequest;
