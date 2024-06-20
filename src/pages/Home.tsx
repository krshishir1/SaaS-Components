import { useState } from "react";

import {
  Typography,
  Button,
  Box,
  BoxProps,
  Container,
  Divider,
} from "@mui/material";
import { FlexBox, FlexColumnBox } from "../components/UI/Container";
import EmailPreviewDisplay from "../components/EmailPreviewDisplay";
import UserNav from "../components/Navbars/UserNav";
import ClientDrawer from "../components/ClientDrawer";
import TextEditor from "../components/TextEditor";
import CustomButton from "../components/UI/Button";

import { primaryColor } from "../theme";

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Box sx={{ m: 0, p: 0, display: "flex" }}>
        <Box sx={!drawerOpen && ({ display: "none" } as any)}>
          <ClientDrawer
            isOpen={drawerOpen}
            handleClose={() => setDrawerOpen(false)}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <UserNav isOpen={drawerOpen} handleOpen={() => setDrawerOpen(true)} />
          <Container>
            <FlexColumnBox
              style={{
                // border: 2,
                // borderColor: "secondary.main",
                // borderRadius: 4,
                mt: 10,
              }}
            >
              <Typography variant="h3">Lorem, ipsum dolor.</Typography>

              <Box>
                <Divider />
                <EmailPreviewDisplay />
                <Divider />
              </Box>

              <Box sx={{ mt: 10 }}>
                <TextEditor />
                <CustomButton content="Get Started" sx={{ fontWeight: 800 }} />
                <CustomButton
                  content="Send Money"
                  color={primaryColor["300"]}
                  hoverColor={primaryColor["400"]}
                  size="small"
                  sx={{ borderRadius: 0 }}
                />
              </Box>

              {/* <FlexBox>
                <Button onClick={() => console.log(editor)}>Get Editor</Button>
              </FlexBox> */}
            </FlexColumnBox>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home;
