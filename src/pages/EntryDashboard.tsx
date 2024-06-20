import { useState } from "react";

import { Box, Container, Stack, Typography } from "@mui/material";
import ClientDrawer from "../components/ClientDrawer";

import { ButtonWithIcon } from "../components/UI/Button";

import AdjustIcon from '@mui/icons-material/Adjust';

const EntryDashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <>
      <Box sx={{ minHeight: "100vh", bgcolor: "primary.dark" }}>
        {/* <ClientDrawer isOpen={drawerOpen} handleClose={() => setDrawerOpen(!drawerOpen)} /> */}
        <Container>
          <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
            <ButtonWithIcon
              content="Suck this"
              color="primary.light"
              hoverColor="primary.mild"
              textColor="text.dark"
              textVariant="h1"
              icon={<AdjustIcon fontSize="large" color="primary" />}
            />
            {/* <ButtonWithIcon
              content="Suck this"
              color="primary.light"
              hoverColor="primary.mild"
              textColor="text.dark"
              textVariant="base"
              size="small"
            /> */}
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
        </Container>
      </Box>
    </>
  );
};

export default EntryDashboard;
