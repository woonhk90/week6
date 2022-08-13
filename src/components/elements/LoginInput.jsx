import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function LoginInput({ label, width, height }) {
  return (
    <Box
      component='form'
      sx={{
        "& > :not(style)": { width: { width } },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField id='outlined-basic' label={label} variant='outlined' />
    </Box>
  );
}
