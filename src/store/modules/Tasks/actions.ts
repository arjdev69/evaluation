export function getListTasks() {
  return {
    type: '@UPDATE_VALUE/GET_LIST_TASKS',
  };
}

export function setListTasks(tasks: any) {
  return {
    type: '@UPDATE_VALUE/SET_LIST_TASKS',
    payload: {tasks},
  };
}
