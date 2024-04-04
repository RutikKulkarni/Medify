import { Box, Typography, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Banner from "../../assets/icons/Banner.png";
import Search from "../../components/Search/Search";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    const localBookings = localStorage.getItem("bookings") || "[]";
    setBookings(JSON.parse(localBookings));
  }, []);

  useEffect(() => {
    setFilteredBookings(bookings);
  }, [bookings]);

  return (
    <Box
      sx={{ background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))" }}
    >
      <Box
        mb="50px"
        pt={1}
        sx={{
          position: "relative",
          background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
        }}
      >
        <Container maxWidth="xl">
          <Stack direction="row" spacing={12} alignItems="flex-end">
            <Typography
              component="h1"
              pb={1}
              fontSize={40}
              fontWeight={700}
              color="#fff"
            >
              My Bookings
            </Typography>
            <Box
              bgcolor="#fff"
              p={3}
              flexGrow={1}
              borderRadius={2}
              boxShadow="0 0 10px rgba(0,0,0,0.1)"
              sx={{ translate: "0 50px" }}
            >
              <Search list={bookings} filterList={setFilteredBookings} />
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ pt: 8, pb: 3 }}>
        <Stack alignItems="flex-start" direction={{ md: "row" }}>
          <Stack spacing={3} width="calc(100% - 384px)" mr="24px">
            {filteredBookings.length > 0 &&
              filteredBookings.map((hospital) => (
                <Card
                  key={hospital["Hospital Name"]}
                  details={hospital}
                  booking={true}
                />
              ))}

            {filteredBookings.length === 0 && (
              <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                No Bookings Found!
              </Typography>
            )}
          </Stack>

          <img src={Banner} width={360} height="auto" />
        </Stack>
      </Container>
    </Box>
  );
};

export default MyBookings;
