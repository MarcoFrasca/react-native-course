import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Error = () => {
  const { container, text } = styles;

  return (
    <View style={container}>
      <Text style={text}>Ooops... Something went wrong!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red"
  }
});

export default Error;
