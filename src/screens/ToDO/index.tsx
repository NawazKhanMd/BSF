/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Keyboard,
  Switch,
} from "react-native";
import { useSelector } from "react-redux";
import Spacer from "../../components/Spacer";
import MyForm from "../MyForm";
import MyTasks from "../MyTasks";
import I18n from "../../i18n";

const ToDo = () => {
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const [enLang, setlang] = useState(false);
  const onKeyboardShow = (event) =>
    setKeyboardOffset(event.endCoordinates.height);
  const onKeyboardHide = () => setKeyboardOffset(0);
  const keyboardDidShowListener = useRef();
  const keyboardDidHideListener = useRef();

  useEffect(() => {
    keyboardDidShowListener.current = Keyboard.addListener(
      "keyboardWillShow",
      onKeyboardShow
    );
    keyboardDidHideListener.current = Keyboard.addListener(
      "keyboardWillHide",
      onKeyboardHide
    );

    return () => {
      keyboardDidShowListener.current.remove();
      keyboardDidHideListener.current.remove();
    };
  }, []);
  // const counter = useSelector((state) => state.current)
  const Banner = () => (
    <View style={styles.bannerContainer}>
      <View style={styles.switchContainer}>
        <Text style={styles.pH10}>English</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#767577" }}
          thumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => {
            setlang(value);
            I18n.locale = value ? "fr" : "en";
          }}
          value={enLang}
        />
        <Text style={styles.pH10}>French</Text>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/playstore.png")}
          style={styles.logo}
        />
        <Spacer />
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={styles.mainContainer}
    >
      <Banner />
      <MyTasks />
      <MyForm keyboardOffset={keyboardOffset} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  pH10: {
    paddingHorizontal: 10,
  },
  mainContainer: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 24,
  },
  switchContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  bannerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoContainer: {
    alignItems: "flex-end",
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ToDo;
