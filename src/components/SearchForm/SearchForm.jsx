import { MenuItem, Select, Button, InputAdornment } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    state: "",
    city: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.state !== "" && formData.city !== "") {
      navigate(`/search?state=${formData.state}&city=${formData.city}`);
    }
  };

  useEffect(() => {
    const getStates = async () => {
      try {
        const data = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStates(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getStates();
  }, []);

  useEffect(() => {
    const getCities = async () => {
      setCities([]);
      setFormData((prev) => ({ ...prev, city: "" }));
      try {
        const data = await axios.get(
          `https://meddata-backend.onrender.com/cities/${formData.state}`
        );
        setCities(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (formData.state !== "") {
      getCities();
    }
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
        sx={{ minWidth: 300, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          State
        </MenuItem>
        {states.length > 0 &&
          states.map((state) => (
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
        sx={{ minWidth: 300, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          City
        </MenuItem>
        {cities.length > 0 &&
          cities.map((city) => (
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
