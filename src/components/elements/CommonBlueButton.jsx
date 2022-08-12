import * as React from "react";
import Stack from "@mui/material/Stack";
import CommonBlueButton from "@mui/material/Button";

export default function CommonButton({ varient }) {
  return (
    <Stack spacing={2} direction='column'>
      <CommonBlueButton variant='contained'>{varient}</CommonBlueButton>
    </Stack>
  );
}
