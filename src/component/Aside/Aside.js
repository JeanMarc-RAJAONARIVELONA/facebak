import React from "react";
import "./Aside.css";
import { Box } from "@mui/material";
function Aside() {
  return (
    <Box
      bgcolor={"azure"}
      flex={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <p>side bar</p>
      </Box>
    </Box>
  );
}

export default Aside;
