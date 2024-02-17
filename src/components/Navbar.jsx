import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link
      to="/"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img src={logo} alt="logo" height={45} />

      <Typography
        variant="body1"
        sx={{
          ml: 2.5,
          color: "#fff",
          fontWeight: "bold",
          letterSpacing: 1.5,
          fontSize: "30px",
        }}
      >
        YouVideos
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
