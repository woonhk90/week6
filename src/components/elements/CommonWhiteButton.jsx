import * as React from "react";
import Stack from "@mui/material/Stack";
import CommonWhiteButton from "@mui/material/Button";

export default function CommonButton({ text, onClick }) {
  return (
    <Stack spacing={2} direction='column'>
      <CommonWhiteButton variant='outlined' onClick={onClick}>
        {text}
      </CommonWhiteButton>
    </Stack>
  );
}
