// Test -------------------------- Importing the Packages ---------------------------------
import { useState } from "react";
import {
  TableContainer,
  TableRow,
  Table,
  TableHead,
  TableCell,
  TableBody,
  Typography,
  Box,
  Paper,
  TableFooter,
  TablePagination,
} from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import useCoinGeckoCoinsList from "../../../hooks/coinGecko/useCoinGeckoList";
import TablePaginationActions from "./TabelPaginationActions";
import { useSelector } from "react-redux";
import { compareRank } from "../../../utilities/Sorting/sort";

// Test -------------------------- The current component ----------------------------------
// This component is used for creating the table from the coins data that we get from Cryto API
const CoinsTable = () => {
  // Getting the state of currently selected currency
  const { label, symbol } = useSelector((state) => state.currencyChanger);
  // console.log(label, symbol);

  // Handling the state in the page, for setting the page, and the rows per page
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Getting the coins Data from the API and then listing in the form of the table
  const coinsList = useCoinGeckoCoinsList(
    label.toLowerCase(),
    rowsPerPage,
    page + 1
  );

  // Sorts the array and replaces the same array with respect to the given property
  coinsList.sort(compareRank);
  // console.log(coinsList);

  // Storing the heading of the table Rows
  const tableRows = ["Rank", "Coin", "Price", "24hr Change", "Market Cap"];

  const tableRowsComponent = tableRows.map((cell, index) => (
    <TableCell
      key={cell}
      sx={{ backgroundColor: "yellow", fontWeight: "700", textAlign: "left" }}
    >
      {cell}
    </TableCell>
  ));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "90%",
        m: "30px auto",
        overflowX: "initial",
        borderRadius: "8px",
      }}
    >
      <Table stickyHeader>
        <TableHead style={{ backgroundColor: "yellow" }}>
          <TableRow>{tableRowsComponent}</TableRow>
        </TableHead>
        <TableBody sx={{ backgroundColor: "#020a0a", color: "white" }}>
          {coinsList.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{ color: "white" }}>
                {row.market_cap_rank}
              </TableCell>

              <TableCell align="left" sx={{ color: "white" }}>
                <Box display="flex" alignItems="center" gap="15px">
                  <>
                    <Box
                      component="img"
                      src={row.image}
                      alt={row.name}
                      height="50px"
                    ></Box>
                  </>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Typography variant="h6">
                      {row.symbol.toUpperCase()}
                    </Typography>
                    <Typography variant="subtitle2">{row.name}</Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                {symbol} {row.current_price}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: row.price_change_percentage_24h >= 0 ? "green" : "red",
                }}
              >
                {row.price_change_percentage_24h} %
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                {symbol} {row.market_cap}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[
                5,
                10,
                25,
                50,
                75,
                { label: "All", value: -1 },
              ]}
              colSpan={3}
              count={100 * 250}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            ></TablePagination>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CoinsTable;
