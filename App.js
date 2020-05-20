import React from "react";
import styled from "styled-components/native";

import { colors } from "./styles";
import HomeView from "./screens/HomeView/HomeView";

export default function App() {
  return (
    <Container>
      <HomeView />
    </Container>
  );
}

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.primary};
`;
