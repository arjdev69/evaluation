import produce from 'immer';

const INITIAL_STATE = {
  machines: [],
  taxs: [],
  loading: false,
};

export default function Machine(
  state = INITIAL_STATE,
  action: {
    type: any;
    payload: {
      machines: [];
      taxs: [];
      loading: false;
    };
  },
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@UPDATE_VALUE/LIST_MACHINES': {
        draft.loading = true;
        break;
      }
      case '@UPDATE_VALUE/SET_LIST_MACHINES': {
        draft.machines = action.payload.machines;
        draft.loading = false;
        break;
      }
      case '@UPDATE_VALUE/GET_LIST_TAXS': {
        draft.loading = true;
        break;
      }
      case '@UPDATE_VALUE/SET_LIST_TAXS': {
        draft.taxs = action.payload.taxs;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
