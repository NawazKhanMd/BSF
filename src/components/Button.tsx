/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { ButtonProps } from "../utils/types";
const MyButton = (props: ButtonProps) => {
  const {
    title = "r",
    onPress = () => {},
    onLongPress = () => {},
    width = "80%",
    height = 60,
    bgColor = "#3AB091",
    txtColor = "#fff",
    txtSize = 17,
    txtWeight = "bold",
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={{
        width: width,
        height: height,
        backgroundColor: bgColor,
        ...styles.mainContainer,
      }}
    >
      <View>
        <Text
          style={{ color: txtColor, fontSize: txtSize, fontWeight: txtWeight }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyButton;
