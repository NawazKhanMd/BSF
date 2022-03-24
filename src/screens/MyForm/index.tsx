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
import { View } from "react-native";
import MyTextInput from "../../components/TextInput";
import MyButton from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";
const MyForm = () => {
  const counter = useSelector((state) => state.current);
  const dispatch = useDispatch();

  const schema = yup.object({
    task: yup.string().required(),
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      task: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData: { task: string }) => {
    const { task } = formData;
    alert(task);
    // setValue("task", "");
    // dispatch()
  };

  return (
    <View>
      <MyTextInput
        placeHolder={"Task Example: Pick up Groceries"}
        name={"task"}
        label={"Task name"}
        control={control}
        errors={errors}
      />
      <MyButton
        title={"Register"}
        width={"100%"}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default MyForm;
