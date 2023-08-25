import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import "./ProfilTop.css";
import { Mail, MoreHoriz } from "@mui/icons-material";
function ProfilTop() {
  return (
    <Box
      flex={6}
      flexDirection={"row"}
      sx={{ width: "70vw", position: "relative",boxShadow:"1px 1px 5px #ccc", pb:"5px" }}
    >
      <Box
        flex={6}
        sx={{ width: "70vw", height: "50vh", borderRadius: "1rem" }}
      >
        <img
          src="https://cdn.pixabay.com/photo/2023/05/02/11/16/artificial-intelligence-7965001_1280.jpg"
          alt="Cover_photo"
          className={"bg_image"}
        />
      </Box>
      <Box
        marginTop={"-50px"}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            padding: "10px",
            gap: "1vw",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682_1280.jpg"
            sx={{
              width: "150px",
              height: "150px",
            }}
          />
          <Box>
            <Typography variant={"h5"} component={"h4"} fontWeight={"700"}>
              John Doe
            </Typography>
            <Typography variant={"p"} component={"p"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "2vw" }}>
          <Button variant="contained">Change Bio</Button>
          <Mail />
          <MoreHoriz />
        </Box>
      </Box>
    </Box>
  );
}

export default ProfilTop;
