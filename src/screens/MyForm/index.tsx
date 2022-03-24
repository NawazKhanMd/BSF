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
import { Keyboard, LayoutAnimation, Platform, UIManager, View } from "react-native";
import MyTextInput from "../../components/TextInput";
import MyButton from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import I18n from '../../i18n';
import { useForm } from "react-hook-form";
import { addTask } from "../../store/actions";
const MyForm = () => {
  const dispatch = useDispatch();
  const keyboardDidShowListener = useRef();
  const keyboardDidHideListener = useRef();
  const [keyboardOffset, setKeyboardOffset] = useState(0);

  if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  const onKeyboardShow = (event:any) => {
    LayoutAnimation.easeInEaseOut();
    setKeyboardOffset(event.endCoordinates.height);
  };
  const onKeyboardHide = () => setKeyboardOffset(0);

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

  const schema = yup.object({
    task: yup.string().required(I18n.t('requiredText')),
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
