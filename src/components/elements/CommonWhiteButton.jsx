import * as React from "react";
import Stack from "@mui/material/Stack";
import CommonWhiteButton from "@mui/material/Button";

export default function CommonButton({ text, onClick, margin, width }) {
  return (
    <Stack spacing={2} direction='column' margin={margin} width={width}>
      <CommonWhiteButton variant='outlined' onClick={onClick}>
        {text}
      </CommonWhiteButton>
    </Stack>
  );
}
