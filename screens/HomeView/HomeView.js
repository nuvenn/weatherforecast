import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
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

  const _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  };

  const _retrieveData = async (key, callback) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        callback(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getWeather = () => {
    axios
      .get(apiUrl)
      .then((response) => response.data.data)
      .then((result) => {
        _storeData("FORECAST", JSON.stringify(result));
        setWeatherInfo(result);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        if (weatherInfo.length === 0) {
          _retrieveData("FORECAST", setWeatherInfo);
        }
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
