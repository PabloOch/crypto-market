// Test -------------------------- Importing the Packages ---------------------------------
import { Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// Test -------------------------- Importing the styles / other components ----------------
import SearchHeading from "./SearchHeading";
import { setSearchValue } from "../../../features/coinsList/coinsList";

// Test -------------------------- The current component ----------------------------------
const Search = () => {
  const { searchValue } = useSelector((state) => state.coinsListHandler);
  const dispatch = useDispatch();

  // For getting the value of the current word in the search bar
  const searchValueHandler = (event) => {
    // console.log(event.target.value);
    dispatch(setSearchValue({ searchValue: event.target.value }));
  };

  // Test ----------------------- Custom Text Field made using Styled --------------------
  return (
    <Box
      backgroundColor="black"
      width="100%"
      px="5%"
      pt="30px"
      display="flex"
      flexDirection="column"
      gap="15px"
    >
      <SearchHeading></SearchHeading>
      <TextField
        variant="outlined"
        fullWidth
        label="Search Cryptocurrency"
        sx={{ input: { color: "white" } }}
        InputLabelProps={{
          style: {
            color: "white",
            borderColor: "red",
          },
        }}
        onChange={searchValueHandler}
        value={searchValue}
        focused
      ></TextField>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Search;
