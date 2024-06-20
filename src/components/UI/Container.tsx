import { Box } from "@mui/material";
import { BoxProps } from "../../types/ComponentProps";

export const FlexBox = (props: BoxProps) => {
  return (
    <Box
      sx={{
        mt: 2,
        px: 4,
        py: 8,
        display: "flex",
        justifyContent: "center",
        ...props.style,
      }}
    >
      {props.children}
    </Box>
  );
};

export const FlexColumnBox = (props: BoxProps) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          ...props.style,
        }}
      >
        {props.children}
      </Box>
    </>
  );
};
