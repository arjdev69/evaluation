export function getListMachine() {
  return {
    type: '@UPDATE_VALUE/LIST_MACHINES',
  };
}

export function setListMachine(machines: any) {
  return {
    type: '@UPDATE_VALUE/SET_LIST_MACHINES',
    payload: {machines},
  };
}

export function getListTaxCredit() {
  return {
    type: '@UPDATE_VALUE/GET_LIST_TAXS',
  };
}

export function setListTaxCredit(taxs: any) {
  return {
    type: '@UPDATE_VALUE/SET_LIST_TAXS',
    payload: {taxs},
  };
}
