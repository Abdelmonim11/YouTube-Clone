import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        p: 1,
        borderBottom: '1px solid #3d3d3d'
      }}
    >
      <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45}/>
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
