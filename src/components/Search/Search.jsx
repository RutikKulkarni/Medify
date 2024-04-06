import { Stack, TextField, Button } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Search.module.css";

const Search = ({ list, filterList }) => {
  const [inputText, setInputText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      filterList(
        list.filter((item) => {
          const name = item["Hospital Name"];
          return name
            .toLocaleLowerCase()
            .includes(inputText.toLocaleLowerCase());
        })
      );
    } else {
      filterList(list);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <Stack direction="row" spacing={2}>
        <TextField
          type="text"
          label="Search By Hospital"
          variant="outlined"
          fullWidth
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          className={styles.searchButton}
          disableElevation
        >
          Search
        </Button>
      </Stack>
    </form>
  );
};

export default Search;
