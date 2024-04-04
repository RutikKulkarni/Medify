import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeroImage from "../../assets/HeroImage/HeroImage.png";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css"; // Import the CSS module

const HeroSection = () => (
  <Swiper>
    <SwiperSlide>
      <Stack
        direction="row"
        spacing={6}
        alignItems="center"
        className={styles.heroContent}
      >
        <Box>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontSize: "50px", fontWeight: "normal" }}
          >
            Skip the travel! Find Online
          </Typography>
          <Typography variant="h1" component="h1" mb={1}>
            Medical <span className={styles.blueText}>Centers</span>
          </Typography>
          <Typography fontSize={20} mb={3}>
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </Typography>
          <Link to="/search">
            <Button variant="contained" size="large" disableElevation>
              Find Centers
            </Button>
          </Link>
        </Box>
        <img src={HeroImage} className={styles.heroImage} />
      </Stack>
    </SwiperSlide>
  </Swiper>
);

export default HeroSection;
