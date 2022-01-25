import streams from "../apis/streams";
import {
  LOGGED_IN,
  LOGGED_OUT,
  CREATE_STREAM,
  GET_STREAM,
  GET_STREAMS,
  UPDATE_STREAM,
  DELETE_STREAM,
  OPEN_MODAL,
  CLOSE_MODAL
} from "./types";

export const openModal = () => {
  return {
    type: OPEN_MODAL
  }
}
export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}

export const googleLogin = (googleResponse) => {
  return {
    type: LOGGED_IN,
    payload: {
      userId: googleResponse.profileObj.googleId,
      username:
        googleResponse.profileObj.givenName +
        " " +
        googleResponse.profileObj.familyName,
      isLoggedIn: true,
    },
  };
};
export const googleLogout = () => {
  return {
    type: LOGGED_OUT,
    payload: {
      userId: null,
      username: null,
      isLoggedIn: false,
    },
  };
};
export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const res = await streams.post("/streams", {...formValues, userId});
  dispatch({
    type: CREATE_STREAM,
    payload: res.data,
  });
};
export const fetchStreams = () => async (dispatch) => {
  const res = await streams.get("/streams");
  dispatch({
    type: GET_STREAMS,
    payload: res.data,
  });
};
export const fetchStream = (id) => async (dispatch) => {
  const res = await streams.get(`/streams/${id}`);
  dispatch({
    type: GET_STREAM,
    payload: res.data,
  });
};
export const updateStream = (id, formValues) => async (dispatch) => {
  const res = await streams.patch(`/streams/${id}`, formValues);
  dispatch({
    type: UPDATE_STREAM,
    payload: res.data,
  });
};
export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });
};
