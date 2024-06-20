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
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { DrawerProps } from "../types/ComponentProps";
import ChevronRight from "@mui/icons-material/ChevronRight";

import { ButtonWithIcon } from "./UI/Button";
import { SidebarBtn } from "./UI/Lists";

const drawerWidth = 210;

const ClientDrawer = ({ isOpen, handleClose }: DrawerProps) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          bgcolor: "neutral.darker",
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

      <Box sx={{px: 2, mt: 5}}>
        <Stack spacing={0} direction={"column"}>
          <SidebarBtn
            content="Inbox"
            icon={<InboxIcon sx={{ color: "neutral.lighter" }} />}
          />
          <SidebarBtn
            content="Actions"
            icon={<InboxIcon sx={{ color: "neutral.lighter" }} />}
          />
        </Stack>
      </Box>
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
