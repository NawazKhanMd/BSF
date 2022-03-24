import { ActionType } from "../utils/types";
import { TASK_ADDED, TASK_REMOVE, TASK_REMOVED } from "./actions";

const INITIAL_STATE = {
  current: [],
};

const friendsReducer = (
  state: any = INITIAL_STATE,
  { type, payload }: { type: ActionType; payload: any }
) => {
  switch (type) {
    case TASK_ADDED:
      const addTodo = [...state.current];
      addTodo.push(payload);
      return { ...state, current: addTodo };
    case TASK_REMOVE:
      const removeTodo = [...state.current];
      removeTodo.splice(payload, 1);
      return { ...state, current: removeTodo };
    default:
      return state;
  }
};

export default friendsReducer;
