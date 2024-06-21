import { Avatar } from "@mui/material";

interface ImageProfileProps {
  content: string;
  src: string;
}

interface TextProfileProps {
    themeColor: string;
    content: string;
}

export const ImageProfileAvatar = (props: ImageProfileProps) => {
  return (<Avatar alt={props.content} src={props.src} />);
};

export const TextProfileAvatar = (props : TextProfileProps) => {
  return <Avatar sx={{bgcolor: props.themeColor, fontSize: 16}} >{props.content}</Avatar>  
}
