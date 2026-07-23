import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

function Feed() {
  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box sx={{ height: {xs: 'auto', md: "92vh"} , borderRight: '1px solid #3d3d3d', px: {xs: 0, md: 2}}}>
        <Sidebar />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2026 Moneim Dev
        </Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: '2' }}>
          <span style={{color: 'white'}}>New </span>
          <span style={{ color: '#F31503' }}>Videos</span>
        </Typography>
      </Box>

    </Stack>
  );
}

export default Feed;
