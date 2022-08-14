// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import Background from "../../components/Background/Background";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const HomePage = () => {
  return (
    <Background>
      <Header></Header>
      <Hero></Hero>
    </Background>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HomePage;
