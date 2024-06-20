import { Grid, Typography, Box, Checkbox, Avatar } from "@mui/material";
import { FlexBox, FlexColumnBox } from "./UI/Container";
import { cyan, green, grey, orange } from "@mui/material/colors";

import EmailTag from "./EmailTag";

const EmailPreviewDisplay = () => {
  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
        //   borderTop: 1,
        //   borderBottom: 1,
        //   borderColor: "secondary.light",
          py: 2,
          my: 2,
        }}
      >
        <Grid item sm={1}>
          <FlexBox style={{ p: 0, gap: 1 }}>
            <div>
              <Checkbox size="small" color="secondary" />
            </div>
            <div>
              <Avatar sx={{ bgcolor: "primary.main" }}>OP</Avatar>
            </div>
          </FlexBox>
        </Grid>
        <Grid item sm={5}>
          <FlexColumnBox style={{ gap: 0.1 }}>
            <div>
              <Typography variant="inherit">John Domes</Typography>
            </div>
            <div>
              <Typography variant="h6">Lorem ipsum dolor sit amet.</Typography>
            </div>
            <div>
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                quod.
              </Typography>
            </div>
          </FlexColumnBox>
        </Grid>
        <Grid item sm={4}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2
            }}
          >

            <EmailTag name="Inbox" color={orange[500]} />
            <EmailTag name="Promotions" color={cyan[100]} />

          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={{fontWeight: "bold"}}>10:24 AM</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default EmailPreviewDisplay;
