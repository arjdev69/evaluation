import produce from 'immer';

const INITIAL_STATE = {
  displayValue: 0.0,
  clientPrice: 0.0,
  providerReceive: 0.0,
  keybValue: 0,
  formPayment: {},
  machine: [],
};

export default function Calculator(
  state = INITIAL_STATE,
  action: {
    type: any;
    payload: {
      keybValue: number;
      providerReceive: number;
      clientPrice: number;
      displayValue: number;
      formPayment: {};
      machine: [];
    };
  },
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@UPDATE_VALUE/KEYBOARD': {
        draft.keybValue = action.payload.keybValue;
        break;
      }
      case '@UPDATE_VALUE/RECEIVE_PROVIDER': {
        draft.providerReceive = action.payload.providerReceive;
        break;
      }
      case '@UPDATE_VALUE/CLIENT_PRICE': {
        draft.clientPrice = action.payload.clientPrice;
        break;
      }
      case '@UPDATE_VALUE/DISPLAY_VALUE': {
        draft.displayValue = action.payload.displayValue;
        break;
      }
      case '@UPDATE_VALUE/FORM_PAYMENT': {
        draft.formPayment = action.payload.formPayment;
        break;
      }
      case '@UPDATE_VALUE/MACHINE': {
        draft.machine = action.payload.machine;
        break;
      }
      default:
    }
  });
}
