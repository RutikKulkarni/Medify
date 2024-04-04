import { Container, Box, Stack } from "@mui/material";
import HeroSection from "../../components/HeroSection/HeroSection";
import SearchForm from "../../components/SearchForm/SearchForm";
import HeroCard from "../../components/HeroCard/HeroCard";

const Home = () => (
  <Box>
    <Box
      sx={{
        background:
          "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
      }}
      mb={12}
    >
      <Container maxWidth="xl">
        <HeroSection />
        <Stack
          p={8}
          mt={-10}
          position="relative"
          zIndex={99}
          bgcolor="#fff"
          borderRadius="15px"
          spacing={10}
          boxShadow="0 0 12px rgba(0,0,0,0.1)"
        >
          <SearchForm />
          <HeroCard />
        </Stack>
      </Container>
    </Box>
  </Box>
);

export default Home;
