import { Container, Box, Stack } from "@mui/material";
import HeroSection from "../../components/HeroSection/HeroSection";
import SearchForm from "../../components/SearchForm/SearchForm";
import HeroCard from "../../components/HeroCard/HeroCard";
import styles from "./Home.module.css";

const Home = () => (
  <Box>
    <Box className={styles.container}>
      <Container maxWidth="xl">
        <HeroSection />
        <Stack className={styles.stackWrapper}>
          <div className={styles.stackItem}>
            <SearchForm />
          </div>
          <HeroCard />
        </Stack>
      </Container>
    </Box>
  </Box>
);

export default Home;
