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
import { ImageBackground, StyleSheet } from "react-native";

const Layout = ({ children }: any) => {
  return (
    <ImageBackground
      source={require("../../../../assets/bg.png")}
      style={styles.mainContainer}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 24,
  },
});

export default Layout;
