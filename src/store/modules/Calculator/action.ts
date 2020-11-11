export function setKeybValue(keybValue: number) {
  return {
    type: '@UPDATE_VALUE/KEYBOARD',
    payload: {keybValue},
  };
}

export function setValueProvider(providerReceive: number) {
  return {
    type: '@UPDATE_VALUE/RECEIVE_PROVIDER',
    payload: {providerReceive},
  };
}

export function setValueClient(clientPrice: number) {
  return {
    type: '@UPDATE_VALUE/CLIENT_PRICE',
    payload: {clientPrice},
  };
}

export function setValueDisplay(displayValue: number) {
  return {
    type: '@UPDATE_VALUE/DISPLAY_VALUE',
    payload: {displayValue},
  };
}

export function setValueFormPayment(formPayment: {}) {
  return {
    type: '@UPDATE_VALUE/FORM_PAYMENT',
    payload: {formPayment},
  };
}

export function setMachine(machine: '') {
  return {
    type: '@UPDATE_VALUE/MACHINE',
    payload: {machine},
  };
}
