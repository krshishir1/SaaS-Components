import { Stack, ListItemIcon, ListItemText, Typography, MenuItem } from "@mui/material";

interface SidebarBtnProps {
  content: String;
  icon: React.ReactNode;
}

type DropdownBtnProps = SidebarBtnProps

export const SidebarBtn = (props: SidebarBtnProps) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        alignItems: "center",
        width: "100%",
        py: 0.4,
        px: 1,
        cursor: "pointer",
        // borderRadius: 1,
        "&:hover": {
          bgcolor: "neutral.dark",
          borderRadius: 1,
        },
      }}
    >
      {/* <ListItemIcon> */}
      {props.icon}
      {/* </ListItemIcon> */}
      {/* <ListItemText> */}
      <Typography variant="h6">{props.content}</Typography>
      {/* </ListItemText> */}
    </Stack>
  );
};

export const DropdownBtn = (props: DropdownBtnProps) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        alignItems: "center",
        width: "100%",
        py: 0.4,
        px: 1,
        cursor: "pointer",
        // borderRadius: 1,
        "&:hover": {
          bgcolor: "neutral.dark",
          borderRadius: 1,
        },
      }}
    >
      {/* <ListItemIcon> */}
      {props.icon}
      {/* </ListItemIcon> */}
      {/* <ListItemText> */}
      <Typography variant="small" sx={{letterSpacing: 0.2}}>{props.content}</Typography>
      {/* </ListItemText> */}
    </Stack>
  );
};

export const MenuItemBtn = () => {
    return (
        <MenuItem>
        </MenuItem>
    )
}