import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { images } from "../Utils/coinIcons";

class CryptoDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params.name ? params.name : "Detail"
    };
  };

  render() {
    const { name, symbol, price_usd } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={style.imageContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: images[symbol] }}
          />
        </View>
        <View style={style.detailContainer}>
          <Text>{`${symbol} | ${name}`}</Text>
          <Text>{price_usd} $</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    marginVertical: 20
  },
  detailContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row"
  }
});

export default CryptoDetail;
