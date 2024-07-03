import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DownloadApp from "./components/Sections/DownloadApp/DownloadApp";

function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
