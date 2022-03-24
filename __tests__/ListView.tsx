/**
 * @format
 */

import "react-native";
import React from "react";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import ListView from "../src/screens/MyTasks/ListView";
import MyButton from "../src/components/Button";

const handleRemove = jest.fn();

const i18n = jest.fn();
jest.mock("../src/i18n/index.ts", () => {
  return { t: () => {} };
});

it("renders correctly", () => {
  const props = { current: ["Some Task"], handleRemove };
  const testRenderer = renderer.create(<ListView {...props} />);
  const testInstance = testRenderer.root;
  expect(testInstance.findByType(MyButton).props.title).toBe("Some Task");
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
