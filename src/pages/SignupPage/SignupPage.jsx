// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";

import { Box, Divider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Test -------------------------- Importing the styles / other components ----------------
import SocialButton from "../../components/Buttons/SocialButton";
import {
  loginUser,
  logoutUser,
  enteredEmail,
  enteredPassword,
  enteredConfirmPassword,
  changePage,
} from "../../features/userHandler/userHandler";
import FormActionButton from "../../components/Buttons/FormActionButton";
import InputTf from "../../components/Form/InputTf";

// Test -------------------------- The current component ----------------------------------
const SignUpPage = () => {
  const state = useSelector((state) => state.userHandler);
  const dispatch = useDispatch();

  const { email, password, confirmPassword } = state;

  console.log(`State of the user`, state);
  return (
    <Box>
      <Box component="section">
        <Box component="header" sx={{ bgcolor: "#393e46", p: 2 }}>
          <Link to="/">
            <Box component="span" sx={{ color: "#f7f7f7", fontSize: "1.5rem" }}>
              Crypto Hunter
            </Box>
          </Link>
        </Box>

        <Box
          component="main"
          sx={{
            bgcolor: "#F7F7F7",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            p: 2,
            width: { xs: "90%", sm: "30rem" },
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              justifyContent: "center",
            }}
          >
            <Box sx={{ fontSize: "1.25rem" }}>Create an account</Box>
            <Box>Enter all details to get started</Box>
          </Box>

          <Box>
            <SocialButton src="https://res.cloudinary.com/dicbnntfh/image/upload/v1671358098/Crypto-Hunter-Mern/Google__G__Logo.svg_xunok2.webp">
              Signup With Google
            </SocialButton>
          </Box>

          <Divider>OR</Divider>

          <Box
            sx={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            <InputTf
              value={email}
              onChange={(e) => dispatch(enteredEmail(e.target.value))}
            >
              Email
            </InputTf>
            <InputTf
              type="password"
              value={password}
              onChange={(e) => dispatch(enteredPassword(e.target.value))}
            >
              Password
            </InputTf>
            <InputTf
              type="password"
              value={confirmPassword}
              onChange={(e) => dispatch(enteredConfirmPassword(e.target.value))}
            >
              Confirm Password
            </InputTf>
          </Box>

          <FormActionButton>Signup</FormActionButton>

          <Box sx={{ fontSize: "0.9rem", width: "100%", textAlign: "center" }}>
            Already have an Account ?{" "}
            <Link to="/login" onClick={() => dispatch(changePage())}>
              <Box
                component="span"
                sx={{
                  fontSize: "0.8rem",
                  textDecoration: "underline",
                  color: "#f05454",
                  cursor: "pointer",
                }}
              >
                Login
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default SignUpPage;
