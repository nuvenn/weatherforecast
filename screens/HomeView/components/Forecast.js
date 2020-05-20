import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { Feather, Entypo } from "@expo/vector-icons";
import { colors } from "../../../styles";

const getDayOfWeek = (day) => {
  const dayIndex = new Date(day);
  const dayOfWeek = dayIndex.getDay();
  if (dayOfWeek === 6) {
    return "Domingo";
  } else if (dayOfWeek === 0) {
    return "Segunda-feira";
  } else if (dayOfWeek === 1) {
    return "Terça-feira";
  } else if (dayOfWeek === 2) {
    return "Quarta-feira";
  } else if (dayOfWeek === 3) {
    return "Quinta-feira";
  } else if (dayOfWeek === 4) {
    return "Sexta-feira";
  } else if (dayOfWeek === 5) {
    return "Sábado";
  }
};

export default function Forecast(props) {
  const { date, dateBR, temperatureMax, temperatureMin, precipitation } = props;
  const dayOfWeek = getDayOfWeek(date);

  return (
    <>
      <Container>
        <Day>
          <Title>{dayOfWeek}</Title>
          <SubTitle>{dateBR}</SubTitle>
        </Day>
        <Feather
          name={precipitation === 0 ? "sun" : "cloud"}
          size={24}
          color={colors.primary}
        />
        <View>
          <SubTitle style={{ color: colors.secondary }}>
            {temperatureMax}°C
          </SubTitle>
          <SubTitle style={{ color: colors.tertiary }}>
            {temperatureMin}°C
          </SubTitle>
        </View>
      </Container>
    </>
  );
}

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primaryLight};
  padding: 10px;
  margin: 10px 0 0;
`;

const Day = styled.View`
  flex: 150px 0 0;
`;

const Title = styled.Text`
  font-size: 20px;
`;

const SubTitle = styled.Text`
  font-size: 18px;
`;
