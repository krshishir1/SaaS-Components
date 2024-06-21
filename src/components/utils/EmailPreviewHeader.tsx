import {
  Grid,
  Typography,
  Box,
  Checkbox,
  Stack,
  IconButton,
} from "@mui/material";

const EmailPreviewHeader = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        alignItems: "stretch",
        m: 0,
        width: "100%",
        // borderTop: 1,
        borderBottom: 1,
        borderColor: "neutral.dark",
        py: 1.5,
        px: 1.5,
        bgcolor: "primary.darkest",
        color: "neutral.lightest",
        userSelect: "none",
        cursor: "pointer",
        ".MuiGrid-item": {
          p: 0,
        },
      }}
    >
      <Grid item sm={3}>
        <Stack>
          <Typography sx={{letterSpacing: 0.2, ml: 0.5}} variant="base">Sender Name</Typography>
        </Stack>
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
        <Stack>
          <Typography sx={{letterSpacing: 0.2}} variant="base">Subject</Typography>
        </Stack>
      </Grid>
      {/* <Grid sm={3} item>
        <Stack direction={"row"} sx={{justifyContent: "right"}}>
          <Typography variant="base">Date</Typography>
        </Stack>
      </Grid> */}
    </Grid>
  );
};

export default EmailPreviewHeader;
