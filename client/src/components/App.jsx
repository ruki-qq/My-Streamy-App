import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";
import {
  STREAM_CREATE,
  STREAM_LIST,
  STREAM_DELETE,
  STREAM_SHOW,
  STREAM_EDIT,
} from "./links";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={STREAM_LIST} element={<StreamList />} />
          <Route path={STREAM_CREATE} element={<StreamCreate />} />
          <Route path={STREAM_EDIT}>
            <Route path=":id" element={<StreamEdit />} />
          </Route>
          <Route path={STREAM_DELETE}>
            <Route path=":id" element={<StreamDelete />} />
          </Route>
          <Route path={STREAM_SHOW}>
            <Route path=":id" element={<StreamShow />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
