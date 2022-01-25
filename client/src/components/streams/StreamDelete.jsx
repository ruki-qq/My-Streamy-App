import React, { useEffect } from "react";
import { Button, CircularProgress, Box } from "@mui/material";
import ShowModal from "../ShowModal";
import { useNavigate, useParams } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { STREAM_LIST } from "../links";
import { deleteStream, fetchStream } from "../../actions";

const StreamDelete = ({ deleteStream, fetchStream }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetchStream(id);
  }, [fetchStream, id]);
  const stream = useSelector((state) => state.streams[id]);
  const onClose = () => {
    navigate(STREAM_LIST);
  };
  const executeDelete = async () => {
    await deleteStream(id);
    navigate(STREAM_LIST);
  };

  const modalActions = (
    <>
      <Button
        variant="outlined"
        color="error"
        sx={{ mr: 2 }}
        onClick={executeDelete}
      >
        Yes
      </Button>
      <Button variant="outlined" onClick={onClose}>
        No
      </Button>
    </>
  );

  return !stream ? (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <ShowModal
      title={`Delete Stream "${stream.title}"`}
      description={`with description: "${stream.description}"`}
      content="You sure want to delete this stream?"
      actions={modalActions}
      onClose={onClose}
    />
  );
};

export default connect(null, { deleteStream, fetchStream })(StreamDelete);
