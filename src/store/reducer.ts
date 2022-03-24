import { ActionType } from "../utils/types";

const INITIAL_STATE = {
  current: [],
};

const friendsReducer = (
  state: any = INITIAL_STATE,
  { type, payload }: { type: ActionType; payload: string }
) => {
  switch (type) {
    case "TASK_ADDED":
      state.current.push(payload);
      return { ...state };
    default:
      return state;
  }
};

export default friendsReducer;
