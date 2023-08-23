import React, {useState} from "react";
import "./Navbar.css";
import {
  AppBar,
  Avatar,
  InputBase,
  Toolbar,
  Typography,
  styled, Menu, MenuItem,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Home, Bolt, VideoCall, Person, LocalMall } from "@mui/icons-material";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  gap: 10,
});
const Search = styled("div")({
  backgroundColor: "#ddd",
  borderRadius: "2rem",
  width: "50%",
  color: "black",
  position: "relative",
});
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Userbox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
}));

function Navbar() {
  const [open,setOpen]= useState(false);
  return (
    <AppBar position="sticky" sx={{ padding: 1, bgcolor: "#eee" }}>
      <StyledToolbar>
        <Box
          flex={2}
          color={"#00a2ff"}
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <AcUnitIcon fontSize="large" />
          <Typography
            variant="h4"
            component="h1"
            fontFamily={"Kaushan Script"}
            sx={{ display: { xs: "none", sm: "block", fontWeight: 600 } }}
          >
            R-face
          </Typography>
        </Box>
        <Box
          flex={6}
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "row",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" />
          </Search>
          <Home sx={{ fontSize: 40 }} className="Icon_hover" />
          <Bolt sx={{ fontSize: 40 }} className="Icon_hover" />
          <VideoCall sx={{ fontSize: 40 }} className="Icon_hover" />
          <Person sx={{ fontSize: 40 }} className="Icon_hover" />
          <LocalMall sx={{ fontSize: 40 }} className="Icon_hover" />
        </Box>
        <Box
          flex={2}
          justifyContent={"flex-end"}
          alignItems={"center"}
          color={"#6969f1"}
          sx={{ display: "flex", gap: 3 }}
        >
          <Badge
            badgeContent={4}
            color="error"
            sx={{ cursor: "pointer", display: { xs: "none", sm: "flex" } }}
          >
            <MailIcon />
          </Badge>
          <Badge
            badgeContent={17}
            color="error"
            sx={{ cursor: "pointer", display: { xs: "none", sm: "flex" } }}
          >
            <NotificationsIcon />
          </Badge>
          <i className="fa-solid fa-gear fa-spin"></i>
          <Avatar
            src="https://cdn.pixabay.com/photo/2016/11/29/20/22/girl-1871104_1280.jpg"
            sx={{ cursor: "pointer", display: { xs: "none", sm: "flex" } }}
            onClick={e=>setOpen(true)}
          />

          <Userbox sx={{ display: { sm: "none" } }}  onClick={e=>setOpen(true)}>
            <Avatar src="https://cdn.pixabay.com/photo/2015/03/03/20/42/man-657869_1280.jpg" />
            <Typography variant="span">JeanMarc</Typography>
          </Userbox>
        </Box>
      </StyledToolbar>
      <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={e=>setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
