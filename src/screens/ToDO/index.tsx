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
import { Text, View, ImageBackground, StyleSheet, Image, Keyboard } from "react-native";
import { useSelector } from "react-redux";
import Spacer from "../../components/Spacer";
import MyForm from "../MyForm";
import MyTasks from "../MyTasks";
const ToDo = () => {
  const [keyboardOffset, setKeyboardOffset] = useState(0);
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
    <View style={styles.logoContainer}>
      <Image
        source={require("../../assets/playstore.png")}
        style={styles.logo}
      />
      <Spacer />
    </View>
  );

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={styles.mainContainer}
    >
      <Banner />
      <MyTasks />
      <MyForm keyboardOffset={keyboardOffset}/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 24,
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
