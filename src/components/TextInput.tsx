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
import { StyleSheet, Text, TextInput, View } from "react-native";
import Spacer from "./Spacer";
import { Controller } from "react-hook-form";
import { TextFieldProps } from "../utils/types";
// import {Icon} from '@ui-kitten/components';

const MyTextInput = ({
  control,
  errors = {},
  name,
  label,
  onChangeEvent,
  placeHolder,
}: TextFieldProps) => {
  const onChangeProxy = (value: string) => {
    if (onChangeEvent) {
      onChangeEvent(value);
    }
  };
  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder={placeHolder}
                style={{ ...styles.inputContainer }}
                onChangeText={(value) => {
                  onChange(value);
                  onChangeProxy(value);
                }}
                value={value}
              />
              <View style={styles.errorContainer}>
                {errors[name] && (
                  <Text>
                    {`${errors[name]?.message}`}
                  </Text>
                )}
              </View>
            </View>
          </>
        )}
        name={name}
      />
      <Spacer height={25}/>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 17,
    height: 74,
    width: "100%",
    backgroundColor: "#E8E8E8",
  },
  icon: {
    width: 32,
    height: 32,
  },
  errorContainer: {
    alignItems: "center",
  },
});

export default MyTextInput;
