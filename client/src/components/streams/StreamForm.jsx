import React from "react";
import { Field, reduxForm } from "redux-form";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";
import { STREAM_LIST } from "../links";
import { required, minLength2, maxLength100 } from "./validation";

const StreamForm = (props) => {
  const navigate = useNavigate();
  const onSubmit = async (formValues) => {
    await props.action(formValues);
    navigate(STREAM_LIST);
  };
  return (
    <Stack
      component="form"
      sx={{
        minWidth: "300px",
        position: "absolute",
        left: "50%",
        top: "25%",
        transform: "translate(-50%, -25%)",
      }}
      spacing={2}
      noValidate
      autoComplete="off"
      onSubmit={props.handleSubmit(onSubmit)}
    >
      <Typography variant="h4" component="div">
        {props.header}
      </Typography>
      <Field
        name="title"
        label="Title"
        component={renderInput}
        validate={required}
      />
      <Field
        name="description"
        label="Description"
        component={renderInput}
        validate={[required, minLength2, maxLength100]}
      />
      <Button variant="contained" type="submit">
        {props.btnText}
      </Button>
    </Stack>
  );
};

const renderInput = ({ input, label, meta: { touched, error } }) => {
  return (
    <FormControl error={touched && !!error} variant="standard">
      <InputLabel>{label}</InputLabel>
      <Input {...input} />
      {touched && error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default reduxForm({
  form: "streamForm",
})(StreamForm);
