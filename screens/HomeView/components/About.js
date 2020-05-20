import React from "react";
import styled from "styled-components/native";
import { colors } from "../../../styles";

export default function About() {
  return (
    <>
      <Container>
        <Title>São Paulo/SP</Title>
        <SubTitle>Brasil</SubTitle>
      </Container>
      <Divider />
    </>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.Text`
  color: ${colors.white};
  font-size: 25px;
`;

const SubTitle = styled.Text`
  color: ${colors.primaryLight};
  font-size: 18px;
`;

const Divider = styled.View`
  border: 0.5px solid ${colors.primaryLight};
  margin: 0 20px 10px;
`;
