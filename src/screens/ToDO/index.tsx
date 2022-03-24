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
import MyForm from "../MyForm";
import MyTasks from "../MyTasks";
import MyBanner from "../MyBanner";
import Layout from "../../components/Layout";

const ToDo = () => {
  return (
    <Layout>
      <MyBanner />
      <MyTasks />
      <MyForm />
    </Layout>
  );
};

export default ToDo;
