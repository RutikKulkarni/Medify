import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Stack, Box, Typography, Grid } from "@mui/material";
import Card from "../../components/Card/Card";
import Tick from "../../assets/icons/Tick.png";
import Banner from "../../assets/icons/Banner.png";
import SearchForm from "../../components/SearchForm/SearchForm";
import ModalComponent from "../../components/Modal/Modal";
import Snackbar from "../../components/Snackbar/Snackbar";
import styles from "./Search.module.css";

const Search = () => {
  const [seachParams, setSearchParams] = useSearchParams();
  const [hospitals, setHospitals] = useState([]);
  const [state, setState] = useState(seachParams.get("state"));
  const [city, setCity] = useState(seachParams.get("city"));
  const availableSlotes = {
    morning: ["10:00 AM", "10:45 AM", "11:30 AM"],
    afternoon: ["01:00 PM", "01:45 PM", "02:30 PM", "03:30 PM", "04:30 PM"],
    evening: ["07:00 PM", "08:00 PM", "08:45 PM", "09:30 PM"],
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);

  useEffect(() => {
    const getHospitals = async () => {
      try {
        const data = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        setHospitals(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (state && city) {
      getHospitals();
    }
  }, [state, city]);

  useEffect(() => {
    setState(seachParams.get("state"));
    setCity(seachParams.get("city"));
  }, [seachParams]);

  const handleModal = (details) => {
    setBookingDetails(details);
    setIsModalOpen(true);
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.header}>
        <Container maxWidth="xl" className={styles.mainContainer}>
          <SearchForm />
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ pt: 8, pb: 3 }}>
        {hospitals.length > 0 && (
          <Box className={styles.infoBox}>
            <Typography className={styles.title} component="h1">
              {`${hospitals.length} medical centers available in `}
              <span className={styles.cityName}>
                {city.toLocaleLowerCase()}
              </span>
            </Typography>
            <Stack direction="row" spacing={2}>
              <img src={Tick} className={styles.tickIcon} />
              <Typography color="#787887">
                Book appointments with minimum wait-time & verified doctor
                details
              </Typography>
            </Stack>
          </Box>
        )}
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <Stack spacing={3}>
              {hospitals.length > 0 &&
                hospitals.map((hospital) => (
                  <Card
                    key={hospital["Hospital Name"]}
                    details={hospital}
                    availableSlotes={availableSlotes}
                    handleBooking={handleModal}
                  />
                ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <img src={Banner} className={styles.bannerImage} alt="Banner" />
          </Grid>
        </Grid>
      </Container>
      <ModalComponent
        open={isModalOpen}
        setOpen={setIsModalOpen}
        bookingDetails={bookingDetails}
        showSuccessMessage={setShowBookingSuccess}
      />
      <Snackbar
        open={showBookingSuccess}
        setOpen={setShowBookingSuccess}
        message="Booking Successful"
      />
    </Box>
  );
};

export default Search;
