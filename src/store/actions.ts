export const TASK_ADD = "TASK_ADD";
export const TASK_ADDED = "TASK_ADDED";
export const TASK_REMOVE = "TASK_REMOVE";
export const TASK_REMOVED = "TASK_REMOVED";

export const addTask = (payload: any) => ({
  type: TASK_ADD,
  payload,
});
export const removeTask = (payload: any) => ({
  type: TASK_REMOVE,
  payload,
});
