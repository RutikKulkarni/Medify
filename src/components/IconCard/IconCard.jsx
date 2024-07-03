import { Box, Stack, Typography } from "@mui/material";

function IconCard({ img, title, bgColor, active = false, shadow = false }) {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      bgcolor={active ? "rgba(42,167,255,0.08)" : bgColor}
      p={{ xs: 2, md: 3 }}
      borderRadius={2}
      border={active ? "1px solid #2AA7FF" : "0"}
      boxShadow={shadow ? "0 0 24px rgba(0,0,0,0.09)" : "none"}
      height={1}
      textAlign={"center"}
    >
      <Box
        component="img"
        src={img}
        height={{ xs: 32, md: 60 }}
        width={{ xs: 32, md: 60 }}
      />
      <Typography
        color={active ? "primary.main" : "#ABB6C7"}
        fontSize={{ xs: 10, md: 18 }}
        fontWeight={active ? 600 : 400}
      >
        {title}
      </Typography>
    </Stack>
  );
}

export default IconCard;
