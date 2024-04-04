import { Box, Stack, Typography } from "@mui/material";

const CardIcon = ({ img, title, bgColor, active = false }) => (
  <Stack
    spacing={2}
    alignItems="center"
    bgcolor={active ? "rgba(42,167,255,0.08)" : bgColor}
    p={3}
    borderRadius={2}
    border={active ? "1px solid #2AA7FF" : "0"}
  >
    <Box component="img" src={img} height={60} width={60} />
    <Typography
      color={active ? "primary.main" : "#ABB6C7"}
      fontSize={18}
      fontWeight={active ? 600 : 400}
    >
      {title}
    </Typography>
  </Stack>
);

export default CardIcon;
