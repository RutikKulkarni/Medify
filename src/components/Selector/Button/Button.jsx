import { useSwiper } from "swiper/react";
import NextIcon from "../../../assets/icons/Next.png";
import PreviousIcon from "../../../assets/icons/Previous.png";
import { Box } from "@mui/material";

const buttonStyle = {
  cursor: "pointer",
  zIndex: 999,
  bgcolor: "#fff",
};

const Button = ({ src, onClick, position, ...rest }) => {
  const swiper = useSwiper();
  return (
    <Box
      component="img"
      src={src}
      onClick={() => swiper[position]()}
      height={48}
      width={48}
      position="absolute"
      sx={{ ...buttonStyle, ...rest }}
    />
  );
};

const PreviousButton = () => {
  return <Button src={PreviousIcon} position="slidePrev" left={0} top={0} />;
};

const NextButton = () => {
  return <Button src={NextIcon} position="slideNext" right={0} top={0} />;
};

export { NextButton, PreviousButton };
