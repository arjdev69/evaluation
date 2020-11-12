import produce from 'immer';

const INITIAL_STATE = {
  tasks: [],
  loading: false,
};

export default function Tasks(
  state = INITIAL_STATE,
  action: {
    type: any;
    payload: {
      tasks: [];
      loading: false;
    };
  },
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@UPDATE_VALUE/GET_LIST_TASKS': {
        draft.loading = true;
        break;
      }
      case '@UPDATE_VALUE/SET_LIST_TASKS': {
        draft.tasks = action.payload.tasks;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
