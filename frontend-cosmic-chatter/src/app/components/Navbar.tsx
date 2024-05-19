import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="/">Cosmic Chatter </a> 
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Link href={"/work"} style={{ marginRight: 10 }}>
              Work
            </Link>
            <Link href={"/chatter"} style={{ marginRight: 10 }}>
              Chatter
            </Link>
            <Link href={"/profile"} style={{ marginRight: 10 }}>
              Profile
            </Link>
            <Link href={"/contact"} style={{ marginRight: 2 }}>
              Contact
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
