import { LOGGED_IN, LOGGED_OUT } from "../actions/types";

const INIT_STATE = { userId: null, username:null, isLoggedIn: false };

export default (loggedUser = INIT_STATE, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return action.payload;
    case LOGGED_OUT:
      return action.payload;
    default:
      return loggedUser;
  }
};
