import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  // Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useForm } from "react-hook-form";
import { Button, Icon, Text } from "@ui-kitten/components";
import AppInputField from "../Form/AppInputField";
import { Ionicons } from "@expo/vector-icons";

export default function ExtraSignUp({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, onBlur },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const renderPasswordIcon = (props) => (
    <TouchableWithoutFeedback
      onPress={() => setPasswordVisible(!passwordVisible)}
    >
      <Icon {...props} name={passwordVisible ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  const onSubmit = (data) => console.log(data);

  const handleAlreadyAccount = () => {
    navigation.navigate("login");
    console.log("alreadt account");
  };

  return (
    <ImageBackground
      source={require("../../assets/cart1.jpg")}
      resizeMode="stretch"
      style={styles.container}
      blurRadius={20}
    >
      <View style={styles.imageConatiner}>
        {/* <Image
          style={styles.image}
          source={require("../../assets/cartlogo.png")}
        /> */}
        <Ionicons name="cart" size={74} color="white" />
        <Text category="h4" style={{ color: "white" }}>
          Digicart
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text category="h2" status="control">
          Sign Up to Digicart
        </Text>
      </View>

      <View style={styles.formContainer}>
        <AppInputField
          name="name"
          placeholder="Full Name"
          icon="person"
          control={control}
          errors={errors}
        />
        <AppInputField
          name="email"
          placeholder="Valid Email"
          icon="mail"
          control={control}
          errors={errors}
        />
        <AppInputField
          name="password"
          placeholder="Password"
          control={control}
          errors={errors}
        />

        <View style={styles.buttonContainer}>
          <Button size="giant" onPress={handleSubmit(onSubmit)}>
            SIGN UP
          </Button>
          <Button
            style={{ marginTop: 7 }}
            appearance="ghost"
            status="control"
            onPress={handleAlreadyAccount}
          >
            Already have an account? Log In
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  imageConatiner: {
    display: "flex",
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
  textContainer: {
    flex: 0.1,
    justifyContent: "center",
    marginLeft: 16,
  },
  formContainer: {
    flex: 0.5,
    paddingHorizontal: 16,
    display: "flex",
  },
  buttonContainer: {
    flex: 0.6,
    marginTop: 30,
  },
});

// Sign Up done
