import { Box, Grid, Typography } from "@mui/material";
import Doctor from "../../assets/icons/Doctor.png";
import Store from "../../assets/icons/Store.png";
import Hospital from "../../assets/icons/Hospital.png";
import Medicine from "../../assets/icons/Medicine.png";
import Ambulance from "../../assets/icons/Ambulance.png";
import CardIcon from "../CardIcon/CardIcon";

const HeroCard = () => {
  const USPs = [
    { img: Doctor, title: "Doctors" },
    { img: Store, title: "Labs" },
    { img: Hospital, title: "Hospitals", active: true },
    { img: Medicine, title: "Medical Stores" },
    { img: Ambulance, title: "Ambulance Services" },
  ];

  return (
    <Box>
      <Typography
        component="h4"
        variant="h4"
        color="primary"
        fontWeight="bold"
        textAlign="center"
        mb={2}
      >
        Explore Our Services
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {USPs.map((usp, index) => (
          <Grid item key={index} xs={6} sm={4} md={2.4}>
            <CardIcon
              img={usp.img}
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
