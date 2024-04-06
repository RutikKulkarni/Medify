import React, { useState } from "react";
import {
  Box,
  Container,
  Button,
  Typography,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo/logo.png";
import styles from "./Navbar.module.css";

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className={styles.header}>
        <Box p={1} className={styles.primary}>
          <Typography variant="body1" align="center" color="white">
            The health and well-being of our patients and their healthcare team
            will always be our priority, so we follow the best practices for
            cleanliness.
          </Typography>
        </Box>
      </div>

      <div className={`${styles.containerBackground}  ${styles.navbar}`}>
        <Container maxWidth="xl">
          <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
            <List>
              <ListItem onClick={toggleMenu}>
                <ListItemText primary="Find Doctors" />
              </ListItem>
              <ListItem onClick={toggleMenu}>
                <ListItemText primary="Hospitals" />
              </ListItem>
              <ListItem onClick={toggleMenu}>
                <ListItemText primary="Medicines" />
              </ListItem>
              <ListItem onClick={toggleMenu}>
                <ListItemText primary="Surgeries" />
              </ListItem>
              <ListItem onClick={toggleMenu}>
                <ListItemText primary="Software for Providers" />
              </ListItem>
              <ListItem onClick={toggleMenu}>
                <ListItemText primary="Facilities" />
              </ListItem>
              <ListItem onClick={toggleMenu}>
                <Link to="/MyBookings" className={styles.link}>
                  <Button variant="contained" className={styles.buttonPrimary}>
                    My Bookings
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Drawer>

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            py={2}
            sx={{ margin: "0 auto", position: "relative" }}
          >
            <Link to="/">
              <img src={logo} alt="Logo" height={27} />
            </Link>

            <IconButton
              onClick={toggleMenu}
              sx={{
                display: { xs: "block", sm: "block", md: "none" },
                paddingRight: "1%",
              }}
            >
              <MenuIcon />
            </IconButton>

            <Stack
              direction="row"
              spacing={4}
              alignItems="center"
              className={styles.navlinks}
              sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
            >
              <Link to="/" className={styles.link}>
                Find Doctors
              </Link>
              <Link to="/" className={styles.link}>
                Hospitals
              </Link>
              <Link to="/" className={styles.link}>
                Medicines
              </Link>
              <Link to="/" className={styles.link}>
                Surgeries
              </Link>
              <Link to="/" className={styles.link}>
                Software for Providers
              </Link>
              <Link to="/" className={styles.link}>
                Facilities
              </Link>
              <Link to="/MyBookings">
                <Button variant="contained" className={styles.buttonPrimary}>
                  My Bookings
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
};

export default CustomNavbar;
