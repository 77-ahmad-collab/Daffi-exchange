import { Box, Container, Toolbar } from "@mui/material";
import { useMemo, useState } from "react";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

// import { Logo } from "../../assets";
import {
  LogoImage,
  LogoTitle,
  MobileTabBox,
  StyledNavBar,
  SyledButton,
  TogglerBox,
} from "../styled";
import TabBoxComponent from "../TabBoxComponent";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const tabs = useMemo(
    () => [
      { name: "Backers" },
      {
        name: "About",
      },
      { name: "Community" },
    ],
    []
  );
  return (
    <StyledNavBar position="sticky">
      <Container maxWidth="xl" sx={{ height: "100%", position: "relative" }}>
        <Toolbar
          disableGutters
          sx={{
            height: "100%",
          }}
        >
          <LogoImage src={""} alt="Name Logo" width={40} height={40} />
          <LogoTitle variant="h1" noWrap>
            Stashed
          </LogoTitle>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <TabBoxComponent tabs={tabs} />

            <SyledButton variant="contained"> Log In</SyledButton>
          </Box>
          <TogglerBox onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <CloseIcon className="greenColor" />
            ) : (
              <MenuIcon className="greenColor" />
            )}
          </TogglerBox>
        </Toolbar>
        <MobileTabBox toggle={toggle}>
          <SyledButton variant="contained" style={{ margin: "10px 15px" }}>
            Log In
          </SyledButton>
          <TabBoxComponent tabs={tabs} />
        </MobileTabBox>
      </Container>
    </StyledNavBar>
  );
};

export default Navbar;
