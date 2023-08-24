import React from "react";
import "./Aside.css";
import {Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader} from "@mui/material";
import {
  Adb,
  Audiotrack, Celebration,
  ExpandLess,
  ExpandMore,
  Explore, Fastfood,
  Inbox,
  LiveTv,
  StarBorder
} from "@mui/icons-material";
function Aside() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box
      bgcolor={"azure"}
      flex={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Nested List Items
              </ListSubheader>
            }
        >
          <ListItemButton>
            <ListItemIcon>
              <Adb/>
            </ListItemIcon>
            <ListItemText primary="Game" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="News feed" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Explore />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Audiotrack />
            </ListItemIcon>
            <ListItemText primary="Audiotrack" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Celebration />
            </ListItemIcon>
            <ListItemText primary="Party" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Fastfood />
            </ListItemIcon>
            <ListItemText primary="Fastfood" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Box>
    </Box>
  );
}

export default Aside;
