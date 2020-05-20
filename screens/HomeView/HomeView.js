import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";

import { colors } from "../../styles";
import Header from "./components/Header";
import About from "./components/About";
import Forecast from "./components/Forecast";

export default function HomeView() {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header />
      <About />
      <Forecast />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;
