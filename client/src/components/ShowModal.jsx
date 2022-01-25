import React from "react";
import { Modal, Box, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const ShowModal = (props) => {
  
  return (
    <Modal open={true} onClose={props.onClose}>
      <Box sx={style}>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
          {props.description}
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
          {props.content}
        </Typography>
        {props.actions}
      </Box>
    </Modal>
  );
};

export default ShowModal;
