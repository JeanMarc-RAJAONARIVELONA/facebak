import React from "react";
import { Box} from "@mui/material";
import Aside from "../component/Aside/Aside";
import Navbar from "../component/Navbar/Navbar";
import ProfilTop from "../component/ProfileTop/ProfilTop";
import Stack from "@mui/material/Stack";
import PostContent from "../component/PostContent/PostContent";
import FriendRequest from "../component/FriendRequest/FriendRequest";


function profil() {
  return (
    <Box>
    <Navbar/>
    <Stack direction={"row"}
           spacing={2}
           justifyContent={"space-between"}
           mx={5}
           mt={2} >
      <Box flex={2}>
        <Aside/>
      </Box>
      <Box flex={4}>
        <Stack direction={"column"}
               spacing={2}
               justifyContent={"space-between"}
               mx={5}
               mt={2} >
          <Box>
            <ProfilTop/>
          </Box>
          <Stack  direction={"row"}
                  spacing={2}
                  justifyContent={"space-between"}
                  mx={5}
                  mt={2} >
            <Box flex={2}>
            <FriendRequest/>
            </Box>
            <Box flex={4}>
              <PostContent/>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Stack>
    </Box>
  );
}

export default profil;
