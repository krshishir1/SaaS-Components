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
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { DrawerProps } from "../types/ComponentProps";
import ChevronRight from "@mui/icons-material/ChevronRight";

import { neutralColor } from "../theme";

const drawerWidth = 240;

const ClientDrawer = ({ isOpen, handleClose }: DrawerProps) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          bgcolor: neutralColor["700"],
          color: neutralColor["100"]
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
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
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
      </List>
    </Drawer>
  );
};

export default ClientDrawer;
