import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import { Feather, Entypo } from "@expo/vector-icons";
import { colors } from "../../../styles";

export default function Forecast() {
  return (
    <>
      <Container>
        <View>
          <Title>Quarta-Feira</Title>
          <SubTitle>20/05/2020</SubTitle>
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
