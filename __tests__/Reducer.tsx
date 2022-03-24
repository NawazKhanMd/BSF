import * as Actions from "../src/store/actions";
import { friendsReducer, INITIAL_STATE } from "../src/store/reducer";

describe("beneficiariesReducer tests", () => {
  it("should return the initial state when state is undefined", () => {
    const action = {
      type: "",
      payload: {},
    };
    expect(friendsReducer(undefined, action)).toEqual(INITIAL_STATE);
  });
  it("should be in loading state when taskAdded", () => {
    const action = {
      type: Actions.TASK_ADDED,
      payload: "New Task",
    };
    expect(friendsReducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      current: ["New Task"],
    });
  });
  it("should be in loading state when taskRemoved", () => {
    const action = {
      type: Actions.TASK_REMOVE,
      payload: 0,
    };
    expect(friendsReducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
    });
  });
});
