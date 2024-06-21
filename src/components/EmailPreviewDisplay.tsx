import {
  Grid,
  Typography,
  Box,
  Checkbox,
  Avatar,
  Stack,
  IconButton,
} from "@mui/material";

import { ImageProfileAvatar, TextProfileAvatar } from "./UI/ProfileAvatar";
import { extractFirstLetter } from "../utils";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import { EmailPreviewProps } from "../types/ComponentProps";

const EmailPreviewDisplay = (props: EmailPreviewProps) => {
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
          // my: 2,
          color: "neutral.lightest",
          userSelect: "none",
          cursor: "pointer",
          "&:hover": {
            bgcolor: "neutral.darker",
            borderRadius: 2
          }
        }}
      >
        <Grid item sm={3}>
          <Stack direction={"row"} spacing={1}>
            <Checkbox
              size="small"
              color="info"
              sx={{
                color: "neutral.lighter",
              }}
            />

            <Stack direction={"row"} spacing={0.8} alignItems={"center"}>
              <Box>
                {props.profilePic ? (
                  <ImageProfileAvatar
                    content={props.senderName}
                    src={props.profilePic}
                  />
                ) : (
                  <TextProfileAvatar
                    content={extractFirstLetter(props.senderName)}
                    themeColor={props.themeColor}
                  />
                )}
              </Box>

              <Typography
                variant="base"
                color="neutral.lighter"
                sx={{ fontWeight: "bold", flexGrow: 1 }}
              >
                {props.senderName}
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
            {props.subject}
          </Typography>
        </Grid>
        <Grid sm={3} item>
          <Stack
            direction={"row"}
            spacing={1}
            sx={{
              height: "100%",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            <Typography variant="small">{props.dateReceived.toDateString()}</Typography>
            <IconButton>
              <MoreVertIcon sx={{ color: "neutral.light", fontSize: 17 }} />
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
