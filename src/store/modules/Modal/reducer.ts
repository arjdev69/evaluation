import produce from 'immer';

const INITIAL_STATE = {
  visible: {
    modal_machines: false,
  },
};

export default function url(
  state = INITIAL_STATE,
  action: {
    type: any;
    payload: {
      visible: {
        modal_machines: false;
      };
    };
  },
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@UPDATE_VALUE/VISIBLE_MODAL': {
        draft.visible = action.payload.visible;
        break;
      }
      default:
    }
  });
}
