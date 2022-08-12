import * as React from "react";
import Stack from "@mui/material/Stack";
import CommonWhiteButton from "@mui/material/Button";

export default function CommonButton({ varient }) {
  return (
    <Stack spacing={2} direction='column'>
      <CommonWhiteButton variant='outlined'>{varient}</CommonWhiteButton>
    </Stack>
  );
}
