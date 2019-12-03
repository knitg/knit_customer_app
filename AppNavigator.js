import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/screens/LoginScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import TailorScreen from "./src/screens/TailorScreen";

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: () => ({
            // headerTransparent: true,
            // headerBackTitle: null
        })
    },
    Dashboard: {
        screen: DashboardScreen,
        navigationOptions: () => ({

        })
    },
    Tailor: {
        screen: TailorScreen,
        navigationOptions: () => ({

        })
    }
}, {
    initialRouteName: 'Login'
})

export default AppNavigator;