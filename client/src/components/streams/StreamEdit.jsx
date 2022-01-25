import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { updateStream, fetchStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = ({fetchStream, updateStream}) => {
  const { id } = useParams();
  useEffect(() => {
    fetchStream(id);
  }, [fetchStream, id]);
  const stream = useSelector((state) => state.streams[id]);
  const onSubmit = (formValues) => {
    updateStream(id, formValues);
  };
  return !stream ? (
    <h1>Loading...</h1>
  ) : (
    <StreamForm
      initialValues={{ title: stream.title, description: stream.description }}
      header="Edit Stream"
      btnText="Save"
      action={onSubmit}
    />
  );
};

export default connect(null, { updateStream, fetchStream })(StreamEdit);
