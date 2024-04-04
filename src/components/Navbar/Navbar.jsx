import React from "react";
import { Box, Container, Button, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import styles from "./Navbar.module.css";

const CustomNavbar = () => {
  return (
    <header>
      <Box p={1} className={styles.primary}>
        <Typography variant="body1" align="center" color="white">
          The health and well-being of our patients and their healthcare team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>

      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          <Link to="/">
            <img src={logo} alt="Logo" height={27} />
          </Link>

          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            className={styles.navlinks}
          >
            <Link to="/">Find Doctors</Link>
            <Link to="/">Hospitals</Link>
            <Link to="/">Medicines</Link>
            <Link to="/">Surgeries</Link>
            <Link to="/">Software for Providers</Link>
            <Link to="/">Facilities</Link>
            <Link to="/MyBookings">
              <Button variant="contained" className={styles.buttonPrimary}>
                My Bookings
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </header>
  );
};

export default CustomNavbar;
