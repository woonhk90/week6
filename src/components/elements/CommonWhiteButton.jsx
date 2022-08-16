import * as React from "react";
import Stack from "@mui/material/Stack";
import CommonWhiteButton from "@mui/material/Button";

export default function CommonButton({ type, text, onClick, width, margin }) {
  return (
    <Stack spacing={2} direction='column' width={width} margin={margin}>
      <CommonWhiteButton variant='outlined' onClick={onClick} type={type}>
        {text}
      </CommonWhiteButton>
    </Stack>
  );
}
