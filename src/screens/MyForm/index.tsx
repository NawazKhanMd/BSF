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
import I18n from '../../i18n';
import { useForm } from "react-hook-form";
import { addTask } from "../../store/actions";
const MyForm = (props: { keyboardOffset?: number }) => {
  const { keyboardOffset } = props;
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
    setValue("task", "");
    dispatch(addTask(task));
  };
  const containerStyle = { paddingBottom: keyboardOffset };

  return (
    <View style={containerStyle}>
      <MyTextInput
        placeHolder={I18n.t('placeHolder')}
        name={"task"}
        label={"Task name"}
        control={control}
        errors={errors}
      />
      <MyButton
        title={I18n.t('btn')}
        width={"100%"}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default MyForm;
