import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Button,
  ListItemButton,
} from "@mui/material";
import { fetchStreams } from "../../actions";
import {
  STREAM_EDIT,
  STREAM_CREATE,
  STREAM_DELETE,
  STREAM_SHOW,
} from "../links";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderBtns(stream) {
    const isLoggedIn = this.props.auth.isLoggedIn;
    const userId = this.props.auth.userId;
    return isLoggedIn && userId === stream.userId ? (
      <div>
        <Button
          variant="outlined"
          component={Link}
          to={`${STREAM_EDIT}/${stream.id}`}
          sx={{ mr: 1 }}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          component={Link}
          to={`${STREAM_DELETE}/${stream.id}`}
          color="error"
        >
          Delete
        </Button>
      </div>
    ) : null;
  }
  renderStreams() {
    const streamsLen = this.props.streams.length - 1;

    return this.props.streams.map((stream, index) => (
      <div key={stream.id}>
        <ListItem
          secondaryAction={this.renderBtns(stream)}
          alignItems="flex-start"
        >
          <ListItemButton component={Link} to={`${STREAM_SHOW}/${stream.id}`}>
            <ListItemText
              primary={stream.title}
              secondary={stream.description}
            />
          </ListItemButton>
        </ListItem>
        {index < streamsLen ? <Divider /> : null}
      </div>
    ));
  }
  renderCreateStreamBtn() {
    const isLoggedIn = this.props.auth.isLoggedIn;
    return isLoggedIn ? (
      <div style={{ textAlign: "right" }}>
        <Button
          variant="outlined"
          component={Link}
          to={STREAM_CREATE}
          sx={{ mr: 2 }}
        >
          Create Stream
        </Button>
      </div>
    ) : null;
  }
  render() {
    return (
      <Box
        sx={{
          width: "800px",
          position: "absolute",
          left: "50%",
          top: "15%",
          transform: "translate(-50%, -15%)",
        }}
      >
        <Typography variant="h4" component="div" sx={{ pl: 2 }}>
          Streams
        </Typography>
        <List>{this.renderStreams()}</List>
        {this.renderCreateStreamBtn()}
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
