import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import ExtraSignUp from "./components/signUp/ExtraSignUp";
import LoginView from "./components/login/LoginView";
import ItemCards from "./components/cards/ItemCards";
import ItemCard from "./components/cards/ItemCard";
import ExtraCreditCardView from "./components/paymentCard/ExtraCreditCardView";
import { SafeAreaView } from "react-native-safe-area-context"; // For safe area view in Android
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConfirmUser from "./components/ConfirmatonPage/ConfirmUser";
import { NavigationContainer } from "@react-navigation/native";
import CustomerAction from "./components/CustomerAction/CustomerAction";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import WelcomeScreen from "./components/welcomeScreen/WelcomeScreen";
import ScannerComponent from "./components/QRcodeScanner/ScannerComponent";
import GenerateQRCode from "./components/QRCodeGenerator/GenerateQRCode";
import AddItemForm from "./components/adminActions/AddItemForm";
import UploadImage from "./components/uploadImage/UploadImage";
import EmptyListMessage from "./components/cards/EmptyListMessage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <ApplicationProvider {...eva} theme={eva.light}>
    //     <Stack.Navigator initialRouteName="confirmUser">
    //       <Stack.Screen name="confirmUser" component={ConfirmUser} />
    //       <Stack.Screen name="customerAction" component={CustomerAction} />
    //       <Stack.Screen name="login" component={LoginView} />
    //       <Stack.Screen name="signUp" component={ExtraSignUp} />
    //       <Stack.Screen name="welcomeScreen" component={WelcomeScreen} />
    //       <Stack.Screen name="itemCards" component={ItemCards} />
    //     </Stack.Navigator>
    //   </ApplicationProvider>
    // </NavigationContainer>
    // <FireBaseAuthProvider>
    <SafeAreaView>
      <GestureHandlerRootView>
        <ApplicationProvider {...eva} theme={eva.light}>
          {/* <UploadImage /> */}
          {/* <AddItemForm /> */}
          {/* <ItemCard /> */}
          <ExtraSignUp />
          {/* <GenerateQRCode /> */}
          {/* <ScannerComponent /> */}
          {/* <WelcomeScreen /> */}
          {/* <CustomerAction /> */}
          {/* <ItemCards /> */}
          {/* <EmptyListMessage /> */}
        </ApplicationProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
    // {/* </FireBaseAuthProvider> */}
  );
}
