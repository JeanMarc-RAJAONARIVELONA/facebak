import React from "react";
import "./FriendRequest.css";
import { Box } from "@mui/material";
function FriendRequest() {
  return (
    <Box
      bgcolor={"aquamarine"}
      flex={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <p>Friend Request</p>
    </Box>
  );
}

export default FriendRequest;
