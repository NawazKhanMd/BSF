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
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const MyTasks = () => {
  const current = useSelector((state) => state.current);

  return (
    <View>
      <Text>{JSON.stringify(current)}</Text>
    </View>
  );
};

export default MyTasks;
