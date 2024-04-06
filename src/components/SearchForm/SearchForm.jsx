import { MenuItem, Select, Button, InputAdornment } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./SearchForm.module.css";

const SearchForm = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    state: "",
    city: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.state && formData.city) {
      navigate(`/search?state=${formData.state}&city=${formData.city}`);
    }
  };

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const { data } = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStates(data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      if (!formData.state) return;
      try {
        const { data } = await axios.get(
          `https://meddata-backend.onrender.com/cities/${formData.state}`
        );
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCities();
  }, [formData.state]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Select
        displayEmpty
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        className={`${styles.selectContainer} ${styles.selectWithBorder}`}
      >
        <MenuItem disabled value="">
          Select State
        </MenuItem>
        {states.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </Select>

      <Select
        displayEmpty
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        className={`${styles.selectContainer} ${styles.selectWithBorder}`}
      >
        <MenuItem disabled value="">
          Select City
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>

      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ py: "15px", px: 8, flexShrink: 0 }}
        disableElevation
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
