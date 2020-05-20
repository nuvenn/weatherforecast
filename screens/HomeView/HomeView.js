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
      .then((response) => response.data.data)
      .then((result) => {
        console.log(result[3]);
        setWeatherInfo(result);
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
      {weatherInfo.map((info) => (
        <Forecast
          key={info.date}
          date={info.date}
          dateBR={info.date_br}
          temperatureMax={info.temperature.max}
          temperatureMin={info.temperature.min}
          precipitation={info.rain.precipitation}
        />
      ))}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;
