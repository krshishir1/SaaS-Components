import { Stack, ListItemIcon, ListItemText } from "@mui/material";

interface SidebarBtnProps {
  content: String;
  icon: React.ReactNode;
}

export const SidebarBtn = (props: SidebarBtnProps) => {
  return (
    <Stack
      direction="row"
      justifyContent={"center"}
      sx={{
        alignItems: "center",
        width: "100%",
        py: 0.7,
        px: 1,
        cursor: "pointer",
        // borderRadius: 1,
        "&:hover": {
          bgcolor: "neutral.dark",
          borderRadius: 1,
        },
      }}
    >
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText>{props.content}</ListItemText>
    </Stack>
  );
};
