import React from "react";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import Navbar from "../component/Navbar/Navbar";
import Aside from "../component/Aside/Aside.js";
import Postcontent from "../component/PostContent/PostContent.js";
import FriendRequest from "../component/FriendRequest/FriendRequest.js";

function Home() {
  return (
    <Box>
      <Navbar />
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent={"space-between"}
        mx={5}
        mt={2}
      >
        <Aside />
        <Postcontent />
        <FriendRequest />
      </Stack>
    </Box>
  );
}

export default Home;
