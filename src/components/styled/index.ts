import { AppBar, Box, Button, styled, Typography } from "@mui/material";

export const LogoImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: 30,
    height: 30,
  },
}));

export const LogoTitle = styled(Typography)<{
  color?: string;
  fontFamily?: string;
}>(({ theme, color, fontFamily }) => ({
  color: color || "#0D0D0D",
  fontWeight: "800",
  fontSize: "32px",
  lineHeight: "32px",
  textDecoration: "none",
  marginLeft: "5px",
  letterSpacing: "-0.02em",
  fontFamily: fontFamily || "PPNeueMachinaBold",
  paddingTop: "5px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",

    marginLeft: "3px",
    fontSize: "17px",
    fontWeight: "bolder",
  },
})) as typeof Typography;

export const MobileTabBox = styled("div", {
  shouldForwardProp: (prop) => prop !== "toggle",
})<{ toggle: boolean }>(({ theme, toggle }) => ({
  height: toggle ? "350px" : "0px",

  width: "100%",
  left: "0px",
  position: "absolute",
  transition: "all 0.3s",
  top: "65px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  boxSizing: "border-box",
  background: "white",
  overflowY: "hidden",
  [theme.breakpoints.up(600)]: {
    display: "none",
  },
}));

export const StyledNavBar = styled(AppBar)(() => ({
  width: "100%",
  height: "75px",
  background: "rgba(255, 255, 255, 0.9)",
  borderBottom: "0.5px solid #B2B2B2",
  boxShadow: "0px -0.4762px 0px rgba(90, 90, 90, 0.3)",
  backdropFilter: "blur(25.8889px)",
  padding: "0px",
}));

export const SyledButton = styled(Button)(() => ({
  background: "#111119",

  textTransform: "none",
  color: "#fff",
  //   marginLeft: "20px",
  boxShadow: "none",
  fontSize: "16px",
  fontWeight: 400,
  cursor: "pointer",
  borderRadius: "55px",
  padding: "10px 25px",
  maxWidth: "140px",
  ":hover": {
    background: "#111119",
    boxShadow: "none",
  },
}));

export const TogglerBox = styled(Box)(({ theme }) => ({
  background: "#0D0D0D",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "3px",
  borderRadius: "3px",
  marginLeft: "auto",
  cursor: "pointer",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const SingleTabText = styled("p")(({ theme }) => ({
  color: "#0D0D0D",
  fontWeight: "400",
  fontSize: "16x",

  letterSpacing: "-0.02em",
  margin: "1rem 2rem",
  cursor: "pointer",
  fontFamily: "SFPROREGULAR",
  [theme.breakpoints.down("md")]: {
    margin: "1rem 1rem",
  },
}));

export const TabBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    borderRight: "none",
    alignItems: "flex-start",
    marginTop: "0px",
  },
}));

export const TitleLarge = styled("p")<{
  textAlign?: "start" | "end" | "center";
}>(({ textAlign }) => ({
  color: "#0D0D0D",
  fontWeight: "800",
  fontSize: "75px",
  textAlign: textAlign || "center",
}));

export const TitleMedium = styled("p")<{
  textAlign?: "start" | "end" | "center";
}>(({ textAlign }) => ({
  color: "#0D0D0D",
  fontWeight: "800",
  fontSize: "55px",
  textAlign: textAlign || "center",
  margin: "0px",
}));

export const CardTitle = styled("p")(() => ({
  fontSize: "30px",
  fontWeight: 800,
  margin: "0px",
}));

export const SubTitle = styled("p")<{
  textAlign?: "start" | "end" | "center";
}>(({ textAlign }) => ({
  color: "#0D0D0D",
  fontWeight: "400",
  fontSize: "22px",
  textAlign: textAlign || "center",
  margin: "0px",
}));

export const HeroWrapper = styled("div")(() => ({
  paddingTop: "30px",
}));

export const BackersWrapper = styled("div")(() => ({
  padding: "50px",
}));

export const ServicesWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "2px solid red",
  width: "80%",
  margin: "auto",
}));

export const ServicesListWrapper = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
}));

export const CommunityWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  border: "2px solid blue",
  width: "80%",
  margin: "auto",
  marginTop: "50px",
}));

export const CommunityListWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  border: "2px solid green",
  width: "80%",
}));

export const CardLeftBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const CardRightBox = styled("div")(() => ({
  // border:""
}));

export const CommunityBox = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#121212",
  width: "250px",
  height: "150px",
  margin: "10px",
  borderRadius: "10px",
}));
