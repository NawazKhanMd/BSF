/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Switch } from "react-native";
import Spacer from "../../components/Spacer";
import I18n from "../../i18n";

const MyBanner = () => {
  const [enLang, setlang] = useState(false);

  return (
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
};

const styles = StyleSheet.create({
  pH10: {
    paddingHorizontal: 10,
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
  }
});

export default MyBanner;
