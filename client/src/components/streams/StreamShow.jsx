import React, { useEffect, useRef } from "react";
import flv from "flv.js";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { fetchStream } from "../../actions";

const StreamShow = ({ fetchStream }) => {
  const { id } = useParams();
  const ref = useRef();
  const stream = useSelector((state) => state.streams[id]);
  useEffect(() => {
    fetchStream(id);
  }, [fetchStream, id]);

  useEffect(() => {
    if (!stream) {
      return;
    }
    const player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    player.attachMediaElement(ref.current);
    player.load();
    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [stream, id]);

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
    <>
      <video ref={ref} style={{ width: "100%" }} controls />
      <h1>{stream.title}</h1>
      <h2>{stream.description}</h2>
    </>
  );
};

export default connect(null, { fetchStream })(StreamShow);
