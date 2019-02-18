import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  FlatList,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";

import CoinCard from "./CoinCard";
import Error from "./Error";

import FetchDataAction from "../Actions/FetchCoinData";

class CryptoContainer extends Component {
  static navigationOptions = {
    title: "App Cryptovalute"
  };

  componentDidMount() {
    this.props.FetchDataAction();
  }

  onCoinPressed = coin => {
    this.props.navigation.navigate("Details", coin);
  };

  renderCoinCards() {
    const { crypto } = this.props;
    return crypto.data.map((coin, index) => (
      <CoinCard
        key={index}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_24h={coin.percent_change_24h}
        percent_change_7d={coin.percent_change_7d}
        onPress={() => this.onCoinPressed(coin)}
      />
    ));
  }

  render() {
    const { crypto } = this.props;

    if (crypto.isFetching) {
      return (
        <View style={style.loadingContainer}>
          <ActivityIndicator size={"large"} />
        </View>
      );
    }

    if (crypto.hasError) {
      return <Error />;
    }

    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        {this.renderCoinCards()}
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  };
}

export default connect(
  mapStateToProps,
  { FetchDataAction }
)(CryptoContainer);

const style = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
