import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Settings } from "@mui/icons-material";

import { UserNavProps } from "../../types/ComponentProps";

const UserNav = ({isOpen, handleOpen} : UserNavProps) => {
  return (
    <Box>
      <AppBar position="static" sx={{ bgcolor: "primary.light", color: 'secondary.light', py: 1, width: '100%'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, ...(isOpen && { display: 'none' }) }}
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Mail
          </Typography>

          <Stack direction="row" gap={1}>
            <IconButton sx={{color: 'secondary.light'}}>
              <Settings />
            </IconButton>
            <Avatar sx={{bgcolor: 'primary.main', p: 3}}>
                OG
            </Avatar>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default UserNav;
