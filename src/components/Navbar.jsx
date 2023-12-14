import React from "react";
import { Link } from "react-router-dom";

import { Stack } from "@mui/material";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        // position: "sticky",
        background: "#00000080",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{ display: "flex", alignItems: "center", flexDirection: "row" }}
      >
        <img src={logo} alt="logo" height={45} />
        <h1 style={{color:"#fff",marginLeft:5}}>PlayTube</h1>
      </Link>
      {/* <SearchBar /> */}
    </Stack>
  );
};

export default Navbar;
