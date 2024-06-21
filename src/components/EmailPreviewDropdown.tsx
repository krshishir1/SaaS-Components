import {
  Popper,
  Fade,
  Paper,
  Typography,
  ClickAwayListener,
  Stack,
} from "@mui/material";

import { DropdownBtn } from "./UI/Lists";

import SearchIcon from "@mui/icons-material/Search";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const classes = {
  smicon: { color: "neutral.lighter", fontSize: "16px" },
};

interface EmailPreviewDropdown {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClickaway: (e: any) => void;
}

const EmailPreviewDropdown = (props: EmailPreviewDropdown) => {
  return (
    // <ClickAwayListener onClickAway={props.handleClickaway}>
    <Popper
      sx={{ zIndex: 5 }}
      open={props.open}
      anchorEl={props.anchorEl}
      placement={"bottom-end"}
      transition
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper
            sx={{
              py: 1,
              px: 0.5,
              bgcolor: "neutral.darker",
              color: "neutral.lighter",
              border: "1px solid white",
              borderColor: "neutral.mild",
            }}
          >
            <Stack spacing={0.1} direction={"column"}>
              <DropdownBtn
                content="Find Similar"
                icon={<SearchIcon sx={classes.smicon} />}
              />

              <DropdownBtn
                content="Create an action"
                icon={<FlashOnIcon sx={classes.smicon} />}
              />

              <DropdownBtn
                content="Mark as seen"
                icon={<DoneIcon sx={classes.smicon} />}
              />

              <DropdownBtn
                content="Delete"
                icon={<DeleteIcon sx={classes.smicon} />}
              />
            </Stack>
          </Paper>
        </Fade>
      )}
    </Popper>
    // </ClickAwayListener>
  );
};

export default EmailPreviewDropdown;
