import DaySelector from "./DaySelector/DaySelector";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { startOfDay } from "date-fns";
import TimeSlotPicker from "./TimeSlotPicker/TimeSlotPicker";

function Calendar({ availableSlotes, details, handleBooking }) {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  const totalSlots =
    availableSlotes.morning.length +
    availableSlotes.afternoon.length +
    availableSlotes.evening.length;

  return (
    <Box>
      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      <TimeSlotPicker
        availableSlotes={availableSlotes}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
}

export default Calendar;
