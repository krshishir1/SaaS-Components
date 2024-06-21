import { useState } from "react";

import { Box, Container, Stack, Typography } from "@mui/material";
import ClientDrawer from "../components/ClientDrawer";

import DashboardNavbar from "../components/Navbars/DashboardNavbar";
import { emailSummaries } from "../constants/sampleEmailSummary";

import AdjustIcon from "@mui/icons-material/Adjust";
import EmailPreviewDisplay from "../components/EmailPreviewDisplay";
import EmailPreviewHeader from "../components/utils/EmailPreviewHeader";

const EntryDashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleSidebar = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <Box
        sx={{ minHeight: "100vh", bgcolor: "neutral.darkest", display: "flex" }}
      >
        {drawerOpen && (
          <ClientDrawer
            isOpen={drawerOpen}
            handleClose={() => setDrawerOpen(!drawerOpen)}
          />
        )}
        <Box sx={{ flexGrow: 1 }}>
          <DashboardNavbar handleSidebar={handleSidebar} />
          {/* <Container sx={{ mt: 6 }}>
            <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
              <ButtonWithIcon
                content="Suck this"
                color="primary.light"
                hoverColor="primary.mild"
                textColor="text.dark"
                textVariant="h1"
                icon={<AdjustIcon fontSize="large" color="primary" />}
              />
            </Stack>

            <Stack
              direction="column"
              spacing={1}
              sx={{ width: "100%", color: "white", mt: 10 }}
            >
              <Typography variant="h1" color="text.mild">
                This is the best application ever made
              </Typography>

              <Typography variant="h2">
                This is the best application ever made
              </Typography>

              <Typography variant="h3">
                This is the best application ever made
              </Typography>

              <Typography variant="h4">
                This is the best application ever made
              </Typography>

              <Typography variant="h5">
                This is the best application ever made
              </Typography>

              <Typography variant="h6">
                This is the best application ever made
              </Typography>

              <Typography variant="base">
                This is the best application ever made
              </Typography>

              <Typography variant="small">
                This is the best application ever made
              </Typography>
            </Stack>
          </Container> */}

          <Container sx={{ mt: 6 }}>
            <Stack sx={{border: 1, borderColor: "neutral.dark", borderRadius: 1}}>
              <EmailPreviewHeader />
              {emailSummaries.map((email) => {
                // const {senderName, senderEmail, subject, dateReceived, profilePic, themeColor} = email;

                return <EmailPreviewDisplay {...email} />;
              })}
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default EntryDashboard;
