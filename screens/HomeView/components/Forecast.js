import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
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
  const { date, date_br } = props;
  const dayOfWeek = getDayOfWeek(date);

  return (
    <>
      <Container>
        <View>
          <Title>{dayOfWeek}</Title>
          <SubTitle>{date_br}</SubTitle>
        </View>
        <Feather name="sun" size={24} color={colors.primary} />
        <View>
          <SubTitle style={{ color: colors.secondary }}>25°C</SubTitle>
          <SubTitle style={{ color: colors.tertiary }}>19°C</SubTitle>
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

const Title = styled.Text`
  font-size: 20px;
`;

const SubTitle = styled.Text`
  font-size: 18px;
`;
