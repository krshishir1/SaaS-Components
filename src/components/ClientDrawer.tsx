import { useState } from "react";
import {
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Typography,
  Stack,
  Menu,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Collapse,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import DraftsIcon from "@mui/icons-material/Drafts";
import ChevronRight from "@mui/icons-material/ChevronRight";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DrawerProps } from "../types/ComponentProps";

import { ButtonWithIcon } from "./UI/Button";
import { SidebarBtn } from "./UI/Lists";

const drawerWidth = 210;

const classes = {
  smicon: { color: "neutral.lighter", fontSize: "19px" },
};

const ClientDrawer = ({ isOpen, handleClose }: DrawerProps) => {
  
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          bgcolor: "primary.darkest",
          color: "neutral.lightest",
        },
      }}
      variant="persistent"
      anchor="left"
      open={isOpen}
      onClose={() => console.log("Sidebar closed")}
    >
      <Box sx={{ display: "flex", justifyContent: "right", m: 0 }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClose}
        >
          <ChevronRight sx={{ width: 24 }} />
        </IconButton>
      </Box>
      {/* <Toolbar /> */}
      <Divider />

      <Box sx={{ px: 2, mt: 5 }}>
        <Stack spacing={0.1} direction={"column"}>
          <SidebarBtn
            content="Inbox"
            icon={<InboxIcon sx={classes.smicon} />}
          />
          <SidebarBtn
            content="Actions"
            icon={<FlashOnIcon sx={classes.smicon} />}
          />
          <SidebarBtn
            content="Seen"
            icon={<VisibilityIcon sx={classes.smicon} />}
          />
          <SidebarBtn
            content="Trash"
            icon={<DeleteIcon sx={classes.smicon} />}
          />
        </Stack>
      </Box>

      <Divider />

      <Stack
        direction="row"
        onClick={() => setCollapsed(!collapsed)}
        sx={{
          px: 2,
          py: 1,
          mt: 5,
          cursor: "pointer",
          justifyContent: "space-between",
          "&:hover": {
            bgcolor: "neutral.dark",
          },
        }}
      >
        <Typography variant="h6">Send Email</Typography>
        <ArrowDropDownIcon sx={classes.smicon} />
      </Stack>

      <Collapse in={collapsed} timeout={50}>
        <Box sx={{ px: 2, userSelect: "none" }}>
          <Stack spacing={0.1} direction={"column"}>
            <SidebarBtn
              content="Compose"
              icon={<CreateIcon sx={classes.smicon} />}
            />

            <SidebarBtn
              content="Sent"
              icon={<MarkEmailReadIcon sx={classes.smicon} />}
            />

            <SidebarBtn
              content="Draft"
              icon={<DraftsIcon sx={classes.smicon} />}
            />
          </Stack>
        </Box>
      </Collapse>
      {/* <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Drawer>
  );
};

export default ClientDrawer;
