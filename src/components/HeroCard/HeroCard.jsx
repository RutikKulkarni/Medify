import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import DoctorIcon from "../../assets/icons/Doctor.png";
import StoreIcon from "../../assets/icons/Store.png";
import HospitalIcon from "../../assets/icons/Hospital.png";
import MedicineIcon from "../../assets/icons/Medicine.png";
import AmbulanceIcon from "../../assets/icons/Ambulance.png";
import CardIcon from "../CardIcon/CardIcon";
import Styles from "./HeroCard.module.css";

const USPs = [
  { icon: DoctorIcon, title: "Doctors" },
  { icon: StoreIcon, title: "Labs" },
  { icon: HospitalIcon, title: "Hospitals", active: true },
  { icon: MedicineIcon, title: "Medical Stores" },
  { icon: AmbulanceIcon, title: "Ambulance Services" },
];

const HeroCard = () => {
  const heroCardTitleStyle = {
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "30px",
    letterSpacing: "0.02em",
    textAlign: "center",
  };

  return (
    <Box>
      <Typography
        component="h5"
        variant="h5"
        className={Styles.heroCardTitle}
        style={heroCardTitleStyle}
      >
        You may be looking for
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {USPs.map((usp, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={2.4}>
            <CardIcon
              img={usp.icon}
              title={usp.title}
              active={usp.active || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HeroCard;
