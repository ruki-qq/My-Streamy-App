import _ from "lodash";
import {
  CREATE_STREAM,
  GET_STREAM,
  GET_STREAMS,
  UPDATE_STREAM,
  DELETE_STREAM,
} from "../actions/types";

const streamReducer = (streams = {}, action) => {
  switch (action.type) {
    case GET_STREAM: {
      return { ...streams, [action.payload.id]: action.payload };
    }
    case GET_STREAMS: {
      return { ...streams, ..._.mapKeys(action.payload, "id") };
    }
    case CREATE_STREAM: {
      return { ...streams, [action.payload.id]: action.payload };
    }
    case UPDATE_STREAM: {
      return { ...streams, [action.payload.id]: action.payload };
    }
    case DELETE_STREAM: {
      return _.omit(streams, action.payload);
    }
    default: {
      return streams;
    }
  }
};

export default streamReducer;
