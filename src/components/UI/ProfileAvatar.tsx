import { Avatar } from "@mui/material";

interface ImageProfileProps {
  content: string;
  src: string;
}

export const ImageProfileAvatar = (props: ImageProfileProps) => {
  return (<Avatar alt={props.content} src={props.src} />);
};
