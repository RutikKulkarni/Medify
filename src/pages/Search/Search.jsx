import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Stack, Box, Typography } from "@mui/material";
import Card from "../../components/Card/Card";
import Tick from "../../assets/icons/Tick.png";
import Banner from "../../assets/icons/Banner.png";
import SearchForm from "../../components/SearchForm/SearchForm";
import Modall from "../../components/Modal/Modal";
import Snackbar from "../../components/Snackbar/Snackbar";

const Search = () => {
  const [seachParams, setSearchParams] = useSearchParams();
  const [hospitals, setHospitals] = useState([]);
  const [state, setState] = useState(seachParams.get("state"));
  const [city, setCity] = useState(seachParams.get("city"));
  const availableSlotes = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
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
    <Box
      sx={{
        background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
        width: "100%",
        pl: 0,
      }}
    >
      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            background: "#fff",
            p: 3,
            borderRadius: 2,
            transform: "translatey(50px)",
            mb: "50px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <SearchForm />
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ pt: 8, pb: 3 }}>
        {hospitals.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography component="h1" fontSize={24} fontWeight={500}>
              {`${hospitals.length} medical centers available in `}
              <span style={{ textTransform: "capitalize" }}>
                {city.toLocaleLowerCase()}
              </span>
            </Typography>
            <Stack direction="row" spacing={2}>
              <img src={Tick} height={24} width={24} />
              <Typography color="#787887">
                Book appointments with minimum wait-time & verified doctor
                details
              </Typography>
            </Stack>
          </Box>
        )}
        <Stack alignItems="flex-start" direction={{ md: "row" }}>
          <Stack spacing={3} width="calc(100% - 384px)" mr="24px">
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
          <img src={Banner} width={360} height="auto" />
        </Stack>
      </Container>
      <Modall
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
