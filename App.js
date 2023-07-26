import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import ExtraSignUp from "./components/signUp/ExtraSignUp";
import LoginView from "./components/login/LoginView";
import ItemCard from "./components/ItemCard";
import ItemCards from "./components/ItemCards";
import ExtraCreditCardView from "./components/paymentCard/ExtraCreditCardView";
import { SafeAreaView } from "react-native-safe-area-context"; // For safe area view in Android
import ConfirmUser from "./components/ConfirmatonPage/ConfirmUser";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomerAction from "./components/CustomerAction/CustomerAction";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Stack.Navigator initialRouteName="confirmUser">
          <Stack.Screen name="confirmUser" component={ConfirmUser} />
          <Stack.Screen name="customerAction" component={CustomerAction} />
          <Stack.Screen name="login" component={LoginView} />
          <Stack.Screen name="signUp" component={ExtraSignUp} />
        </Stack.Navigator>
      </ApplicationProvider>
    </NavigationContainer>
    // <SafeAreaView>
    //   <ApplicationProvider {...eva} theme={eva.light}>
    //     {/* <ExtraSignUp /> */}
    //     <CustomerAction />
    //   </ApplicationProvider>
    // </SafeAreaView>
  );
}
