import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { startOfDay } from "date-fns";
import SelectorTime from "./SelectorTime/SelectorTime";
import Day from "./SelectorDay/SelectorDay";

const Calendar = ({ availableSlotes, details, handleBooking }) => {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));
  const totalSlots =
    availableSlotes.morning.length +
    availableSlotes.afternoon.length +
    availableSlotes.evening.length;

  return (
    <Box>
      <Day
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      <SelectorTime
        availableSlotes={availableSlotes}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
};

export default Calendar;
