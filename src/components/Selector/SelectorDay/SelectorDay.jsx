import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { format, add, isEqual, startOfDay } from "date-fns";
import { NextButton, PreviousButton } from "../Button/Button";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import "swiper/css";
import styles from "./SelectorDay.module.css";

const Day = ({ selectedDate, setSelectedDate, totalSlots }) => {
  const date = startOfDay(new Date());
  const dateItems = [];
  for (let i = 0; i < 7; i++) {
    dateItems.push(add(date, { days: i }));
  }
  const customDateFormat = (day) => {
    if (isEqual(date, day)) {
      return "Today";
    } else if (isEqual(date, add(day, { days: -1 }))) {
      return "Tomorrow";
    } else {
      return format(day, "E, d LLL");
    }
  };

  const handleClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <Stack pt={3} position="relative">
      <Divider sx={{ mb: 3 }} />
      <Swiper
        slidesPerView={3}
        loop={false}
        spaceBetween={30}
        className={styles.swiperStyles}
      >
        {dateItems.map((day, index) => (
          <SwiperSlide key={index} className={styles.swiperslide}>
            <Stack
              textAlign="center"
              onClick={() => handleClick(day)}
              sx={{ cursor: "pointer" }}
            >
              <Typography fontWeight={isEqual(day, selectedDate) ? 700 : 400}>
                {customDateFormat(day)}
              </Typography>
              <Typography fontSize={12} color="primary.green">
                {`${totalSlots} Slots Available`}
              </Typography>

              <Box
                height="5px"
                width="calc(100% - 50px)"
                position="relative"
                bottom="0"
                bgcolor={
                  isEqual(day, selectedDate) ? "primary.main" : "rgba(0,0,0,0)"
                }
                left={0}
                zIndex={999}
                mt="5px"
                mx="auto"
              ></Box>
            </Stack>
          </SwiperSlide>
        ))}

        <span slot="container-start">
          <PreviousButton />
        </span>

        <span slot="container-end">
          <NextButton />
        </span>
      </Swiper>

      <Box
        height="5px"
        width="calc(100% - 150px)"
        bgcolor="#F0F0F5"
        mt="5px"
        position="absolute"
        bottom={0}
        left="50%"
        sx={{ translate: "-50% 0" }}
      ></Box>
    </Stack>
  );
};

export default Day;
