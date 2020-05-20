import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import axios from "axios";
import styled from "styled-components";

import { colors } from "../../styles";
import Header from "./components/Header";
import About from "./components/About";
import Forecast from "./components/Forecast";

export default function HomeView() {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const apiUrl =
    "http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/3477/days/15?token=bda1bab21ddc54b9546de7a72a53fc46";

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = () => {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data.data[0]);
        setWeatherInfo(response.data.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
