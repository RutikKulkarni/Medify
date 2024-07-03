import { Box, Grid, Typography } from "@mui/material";
import icon1 from "../../../assets/Icons/Doctor.png";
import icon2 from "../../../assets/Icons/Drugstore.png";
import icon3 from "../../../assets/Icons/Hospital.png";
import icon4 from "../../../assets/Icons/Capsule.png";
import icon5 from "../../../assets/Icons/Ambulance.png";
import IconCard from "../../IconCard/IconCard";

function HeroUSPs() {
  const USPs = [
    { img: icon1, title: "Doctors" },
    { img: icon2, title: "Labs" },
    { img: icon3, title: "Hospitals", active: true },
    { img: icon4, title: "Medical Store" },
    { img: icon5, title: "Ambulance" },
  ];

  return (
    <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        You may be looking for
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 1, md: 2 }}
        justifyContent={"center"}
      >
        {USPs.map((usp) => (
          <Grid item key={usp.title} xs={4} md={2.4}>
            <IconCard
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
}

export default HeroUSPs;
