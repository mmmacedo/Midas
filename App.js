import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: blue;
`;

const ButtonContainer = styled.TouchableOpacity``;

const Button = styled.View`
  padding: 8px 16px 8px 16px;
  border: solid 1px white;
  border-radius: 16px;
`;

const ButtonText = styled.Text`
  color: white;
`;

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <ButtonContainer>
          <Button>
            <ButtonText>Hello World</ButtonText>
          </Button>
        </ButtonContainer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
