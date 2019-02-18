import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  const { container, title } = styles;
  return (
    <View style={container}>
      <Text style={title}>App Criptovalute</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 30,
    alignItems: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 20
  }
});

export default Header;
