import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextField(props) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "220px" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label={props.name} variant="standard" />
    </Box>
  );
}
