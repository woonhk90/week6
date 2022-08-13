import * as React from "react";
import Stack from "@mui/material/Stack";
import CommonBlueButton from "@mui/material/Button";

export default function CommonButton({ text }) {
  return (
    <Stack spacing={2} direction='column'>
      <CommonBlueButton variant='contained'>{text}</CommonBlueButton>
    </Stack>
  );
}
