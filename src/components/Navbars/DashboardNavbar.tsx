import { AppBar, Toolbar, Box, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface NavbarProps {
    handleSidebar ?: () => void
}

const DashboardNavbar = ({handleSidebar} : NavbarProps) => {
  return (
    <Box sx={{width: "100%"}}>
      <AppBar position="sticky" sx={{bgcolor: "primary.darkest"}}>
        <Toolbar>
          <IconButton
            size="medium"
            sx={{ mr: 2, color: "primary.lightest" }}
            onClick={handleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Inbox Digest
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DashboardNavbar;
