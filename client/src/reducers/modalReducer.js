import { OPEN_MODAL, CLOSE_MODAL } from "../actions/types";

export default (modalState = true, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return true;
    case CLOSE_MODAL:
      return false;
    default:
      return modalState;
  }
};
