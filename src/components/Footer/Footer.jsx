import React from "react";
import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import logo from "../../assets/logo/logo.png";
import facebook from "../../assets/FooterIcons/facebook.png";
import pinterest from "../../assets/FooterIcons/pinterest.png";
import twitter from "../../assets/FooterIcons/twitter.png";
import youtube from "../../assets/FooterIcons/youtube.png";
import styles from "./Footer.module.css";

const TextFooter = ({ children }) => (
  <Link underline="none" className={styles.TextFooter}>
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
        <Grid container spacing={4}>
          <Grid item xs={12} md={4.5}>
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              height={1}
            >
              <img
                src={logo}
                height={36}
                alt="Medify"
                className={styles.logo}
              />
              <Stack direction="row" spacing={1.5}>
                <img src={facebook} height={36} className={styles.socialIcon} />
                <img src={twitter} height={36} className={styles.socialIcon} />
                <img src={youtube} height={36} className={styles.socialIcon} />
                <img
                  src={pinterest}
                  height={36}
                  className={styles.socialIcon}
                />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <TextFooter>About Us</TextFooter>
              <TextFooter>Our Pricing</TextFooter>
              <TextFooter>Our Gallery</TextFooter>
              <TextFooter>Appointment</TextFooter>
              <TextFooter>Privacy Policy</TextFooter>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <TextFooter>Orthology</TextFooter>
              <TextFooter>Neurology</TextFooter>
              <TextFooter>Dental Care</TextFooter>
              <TextFooter>Opthalmology</TextFooter>
              <TextFooter>Cardiology</TextFooter>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <TextFooter>About Us</TextFooter>
              <TextFooter>Our Pricing</TextFooter>
              <TextFooter>Our Gallery</TextFooter>
              <TextFooter>Appointment</TextFooter>
              <TextFooter>Privacy Policy</TextFooter>
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
