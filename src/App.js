import React from "react";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import CustomNavbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <CustomNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
