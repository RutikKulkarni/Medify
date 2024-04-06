import React, { useState } from "react";
import {
  Modal,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { format } from "date-fns";
import styles from "./Modal.module.css";

const ModalComponent = ({
  setOpen,
  open,
  bookingDetails,
  showSuccessMessage,
}) => {
  const [email, setEmail] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    const bookings = localStorage.getItem("bookings") || "[]";
    const oldBookings = JSON.parse(bookings);
    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...oldBookings,
        { ...bookingDetails, bookingEmail: email },
      ])
    );
    showSuccessMessage(true);
    setEmail("");
    setOpen(false);
  };

  const formatDate = (day) => {
    if (day) {
      const date = new Date(day);
      return format(date, "E, d LLL");
    } else {
      return null;
    }
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box className={styles.modalContent}>
        <Typography component="h3" variant="h3" className={styles.heading}>
          Confirm Booking
        </Typography>
        <Typography fontSize={14} mb={3} className={styles.subText}>
          <span>Please enter your email to confirm booking for </span>
          <span className={styles.bookingDetails}>
            {`${bookingDetails.bookingTime} on ${formatDate(
              bookingDetails.bookingDate
            )}`}
          </span>
        </Typography>
        <form onSubmit={handleBooking}>
          <Stack alignItems="center" spacing={3}>
            <TextField
              type="email"
              label="Enter your email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputField}
            />
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disableElevation
                className={styles.confirmButton}
              >
                Confirm
              </Button>
              <Button
                variant="outlined"
                size="large"
                disableElevation
                onClick={() => setOpen(false)}
                className={styles.cancelButton}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
