import { SxProps, Theme } from "@mui/material/styles";

export interface BoxProps {
  children: React.ReactNode;
  style?: SxProps;
}

export interface TagProps {
  name: String;
  color: String;
}

export interface DrawerProps {
  isOpen: boolean;
  handleClose: () => void;
}

export interface UserNavProps {
  isOpen: boolean;
  handleOpen: () => void;
}

export interface EmailPreviewProps {
  senderEmail: string;
  senderName: string;
  subject: string;
  dateReceived: Date;
  themeColor?: string;
  profilePic?: string;
}
