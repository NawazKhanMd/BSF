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
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../store/actions";
import ListView from "./ListView";

const MyTasks = () => {
  const current = useSelector((state) => state.current);
  const dispatch = useDispatch();

  const handleRemove = (index: number) => {
    dispatch(removeTask(index));
  };

  return <ListView current={current} handleRemove={handleRemove} />;
};

export default MyTasks;
