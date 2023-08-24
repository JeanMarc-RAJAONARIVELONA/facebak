import React from "react";
import {Avatar, Box, Button, Typography} from "@mui/material";

function Request() {
  return (
    <Box  sx={{display:"flex", flexDirection:"column",gap:"1rem",p:"10px"}}>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" , gap:"0.5rem"}}>
        <Avatar src="https://cdn.pixabay.com/photo/2016/11/29/20/22/girl-1871104_1280.jpg" />
        <Typography fontWeight={600}>John Doe</Typography>
      </Box>
      <Box sx={{display:"flex", flexDirection:" row", alignItems:"center", gap:"1vw"}}>
        <Button variant="contained">Confimer</Button>
        <Button variant="contained"sx={{bgcolor:"#858585"}}>Delete</Button>
      </Box>
    </Box>
  );
}

export default Request;
