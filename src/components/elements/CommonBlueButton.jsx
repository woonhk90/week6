import * as React from "react";
import Stack from "@mui/material/Stack";
import CommonBlueButton from "@mui/material/Button";

export default function CommonButton({ text, margin, width }) {
  return (
    <Stack spacing={2} direction='column' margin={margin} width={width}>
      <CommonBlueButton variant='contained'>{text}</CommonBlueButton>
    </Stack>
  );
}
