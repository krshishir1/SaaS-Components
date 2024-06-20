import { Button, SxProps, Typography, Stack } from "@mui/material";
import { primaryColor } from "../../theme";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { PropaneSharp } from "@mui/icons-material";

interface ButtonProps {
  content: String;
  color?: String;
  hoverColor?: String;
  textColor?: String;
  focusColor?: String;
  textVariant?: String;
  size ?: String;
  radius ?: Number;
  sx ?: SxProps
}

interface IconBtnProps extends ButtonProps {
  iconPos ?: "left" | "right";
  icon?: React.ReactNode
}

export const CustomButton = (props: ButtonProps) => {
  let bgColor = props.color || (primaryColor["500"] as any);
  let bgHoverColor = props.hoverColor || (primaryColor["700"] as any);
  let paddingX = props.size === 'small' ? 2 : 4;
  let paddingY = props.size === 'small' ? 1 : 2  
  console.log(props)
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: 'primary.main',
        color: "white",
        px: paddingX,
        py: paddingY,
        borderRadius: props.radius,
        "&:hover": {
          bgcolor: bgHoverColor,
        },
        ...props.sx
      }}
    >
      {props.content}
    </Button>
  );
};

export const ButtonWithIcon = (props: IconBtnProps) => {
  let paddingX = props.size === 'small' ? 2 : 4;
  let paddingY = props.size === 'small' ? 1 : 2  

  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: props.color,
        color: props.textColor,
        px: paddingX,
        py: paddingY,
        borderRadius: props.radius,
        "&:hover": {
          bgcolor: props.hoverColor,
        },
        "&:active": {
          bgcolor: props.focusColor
        },
        ...props.sx
      }}
      
    >
      <Stack spacing={0.5} direction={"row"} sx={{alignItems: "center"}}>
        {props.iconPos !== "right" && props.icon}
        <Typography variant={props.textVariant || "base"}>
          {props.content}
        </Typography>
        {props.iconPos === "right" && props.icon}
      </Stack>
    </Button>
  );
}

