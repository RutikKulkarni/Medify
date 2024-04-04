import styled from "@emotion/styled";
import { Chip, Stack, Typography, Divider } from "@mui/material";

const SelectorTime = ({
  availableSlotes,
  details,
  handleBooking,
  selectedDate,
}) => {
  const CustomChip = ({ label, handleClick }) => (
    <Chip
      label={label}
      color="primary"
      variant="outlined"
      sx={{
        borderRadius: "5px",
        fontSize: 14,
        cursor: "pointer",
      }}
      onClick={handleClick}
    />
  );

  const handleClick = (slot) => {
    handleBooking({ ...details, bookingDate: selectedDate, bookingTime: slot });
  };

  return (
    <Stack
      pt={3}
      spacing={3}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {availableSlotes.morning.length > 0 && (
        <Stack direction="row" spacing={3} alignItems="center" px={6}>
          <Typography width="15%">Morning</Typography>
          {availableSlotes.morning.map((slot) => (
            <CustomChip
              key={slot}
              label={slot}
              handleClick={() => handleClick(slot)}
            />
          ))}
        </Stack>
      )}
      {availableSlotes.afternoon.length > 0 && (
        <Stack direction="row" spacing={3} alignItems="center" px={6}>
          <Typography width="15%">Afternoon</Typography>
          {availableSlotes.afternoon.map((slot) => (
            <CustomChip
              key={slot}
              label={slot}
              handleClick={() => handleClick(slot)}
            />
          ))}
        </Stack>
      )}
      {availableSlotes.evening.length > 0 && (
        <Stack direction="row" spacing={3} alignItems="center" px={6}>
          <Typography width="15%">Evening</Typography>
          {availableSlotes.evening.map((slot) => (
            <CustomChip
              key={slot}
              label={slot}
              handleClick={() => handleClick(slot)}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default SelectorTime;
