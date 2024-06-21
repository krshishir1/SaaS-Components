import { Grid, Typography, Box, Checkbox, Avatar, Stack, IconButton } from "@mui/material";
import { FlexBox, FlexColumnBox } from "./UI/Container";
import { cyan, green, grey, orange } from "@mui/material/colors";

import EmailTag from "./EmailTag";

import { ImageProfileAvatar } from "./UI/ProfileAvatar";

import profile1 from "../assets/profile1.jpeg";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const EmailPreviewDisplay = () => {
  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          alignItems: "stretch",
          // borderTop: 1,
          borderBottom: 1,
          borderColor: "neutral.dark",
          py: 2,
          my: 2,
          color: "neutral.lightest",
          userSelect: "none"
        }}
      >
        <Grid item sm={2}>
          <Stack direction={"row"} spacing={1}>
            <Checkbox
              size="small"
              color="info"
              sx={{
                color: "neutral.lighter",
              }}
            />

            <Stack direction={"row"} spacing={0.8} alignItems={"center"}>
              <ImageProfileAvatar src={profile1} content={"John Doe"} />

              <Typography
                variant="base"
                color="neutral.lighter"
                sx={{ fontWeight: "bold" }}
              >
                John Doe
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          <Typography variant="h6">
            Welcome to our esteemed community!
          </Typography>
        </Grid>
        <Grid sm={3} item>
          <Stack direction={"row"} spacing={1} sx={{height: "100%", alignItems: "center", justifyContent: "right"}}>
            <Typography variant="small">Yesterday</Typography>
            <IconButton>
              <MoreVertIcon sx={{color: "neutral.light", fontSize: 17}} />
            </IconButton>
          </Stack>
        </Grid>
        {/* <Grid item sm={4}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <EmailTag name="Inbox" color={orange[500]} />
            <EmailTag name="Promotions" color={cyan[100]} />
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            10:24 AM
          </Typography>
        </Grid> */}
      </Grid>
    </>
  );
};

export default EmailPreviewDisplay;
