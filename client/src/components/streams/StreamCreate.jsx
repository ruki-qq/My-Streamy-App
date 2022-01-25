import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamCreate = (props) => {
  return (
    <StreamForm
      header="Create Stream"
      btnText="Create"
      action={props.createStream}
    />
  );
};
export default connect(null, { createStream })(StreamCreate);
