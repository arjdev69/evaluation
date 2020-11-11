export function setVisibleModal(visible: {}) {
  return {
    type: '@UPDATE_VALUE/VISIBLE_MODAL',
    payload: {visible},
  };
}

export function setVisibleModalList(visible: Boolean) {
  return {
    type: '@UPDATE_VALUE/VISIBLE_MODAL_LIST',
    payload: {visible},
  };
}
