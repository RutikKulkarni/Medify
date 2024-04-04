import React from "react";
import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import logo from "../../assets/logo/logo.png";
import facebook from "../../assets/FooterIcons/facebook.png";
import pinterest from "../../assets/FooterIcons/pinterest.png";
import twitter from "../../assets/FooterIcons/twitter.png";
import youtube from "../../assets/FooterIcons/youtube.png";
import styles from './Footer.module.css';

const FL = ({ children }) => (
  <Link underline="none" className={styles.footerLink}>
    <Stack direction="row" gap={0.5}>
      <KeyboardArrowRightIcon />
      {children}
    </Stack>
  </Link>
);

const Footer = () => {
  return (
    <Box className={styles.footerContainer}>
      <Container maxWidth="xl" className={styles.footerInner}>
        <Grid container spacing={4} >
          <Grid item xs={12} md={4.5}>
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              height={1}
            >
              <Box src={logo} height={36} alt="Medify" component="img" mb={2} />
              <Stack direction="row" spacing={1.5}>
                <Box component="img" src={facebook} height={36} />
                <Box component="img" src={twitter} height={36} />
                <Box component="img" src={youtube} height={36} />
                <Box component="img" src={pinterest} height={36} />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FL>About Us</FL>
              <FL>Our Pricing</FL>
              <FL>Our Gallery</FL>
              <FL>Appointment</FL>
              <FL>Privacy Policy</FL>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FL>Orthology</FL>
              <FL>Neurology</FL>
              <FL>Dental Care</FL>
              <FL>Opthalmology</FL>
              <FL>Cardiology</FL>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FL>About Us</FL>
              <FL>Our Pricing</FL>
              <FL>Our Gallery</FL>
              <FL>Appointment</FL>
              <FL>Privacy Policy</FL>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
          className={styles.footerText}
        >
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
