import React from "react";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import CustomNavbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <CustomNavbar />
      <Outlet />
    </div>
  );
};

export default App;
