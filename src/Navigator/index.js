import { createStackNavigator, createAppContainer } from "react-navigation";

import { CryptoContainer, CryptoDetail } from "../components";

const RootNavigator = createStackNavigator(
  {
    Home: {
      screen: CryptoContainer
    },
    Details: {
      screen: CryptoDetail
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(RootNavigator);
