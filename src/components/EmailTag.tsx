import { Typography, Box } from "@mui/material";
import { TagProps } from "../types/ComponentProps";

const EmailTag = ({ name, color }: TagProps) => {
  return (
    <Box sx={{bgcolor: color as string, px: 2, py: 1, borderRadius: 4, m: 0}}>
      <Typography variant="h6">{name}</Typography>
    </Box>
  );
};

export default EmailTag;
