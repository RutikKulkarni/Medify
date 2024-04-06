import { Box, Typography, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import BannerImage from "../../assets/icons/Banner.png";
import Search from "../../components/Search/Search";
import styles from "./MyBookings.module.css";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  useEffect(() => {
    setFilteredBookings(bookings);
  }, [bookings]);

  return (
    <Box
      sx={{ background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))" }}
    >
      <Box className={styles.banner}>
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "center", md: "flex-end" }}
            justifyContent="space-between"
            spacing={2}
          >
            <Typography
              component="h2"
              pb={1}
              fontSize={{ xs: 20, md: 30 }}
              fontWeight={600}
              className={styles.title}
            >
              My Bookings
            </Typography>
            <Box className={styles.searchBox}>
              <Search list={bookings} filterList={setFilteredBookings} />
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="xl" className={styles.bookingsContainer}>
        <Stack
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 0 }}
        >
          <Stack
            width={{ xs: "100%", md: "calc(100% - 384px)" }}
            mr={{ md: 24 }}
          >
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <Card
                  key={booking["Hospital Name"]}
                  details={booking}
                  booking={true}
                />
              ))
            ) : (
              <Typography variant="h3" className={styles.noBookings}>
                No Bookings Found!
              </Typography>
            )}
          </Stack>
          <img src={BannerImage} alt="Banner" width={360} height="auto" />
        </Stack>
      </Container>
    </Box>
  );
};

export default MyBookings;
