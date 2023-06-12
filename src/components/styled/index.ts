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
  fontWeight: "bolder",
  fontSize: "32px",
  lineHeight: "32px",
  textDecoration: "none",
  marginLeft: "5px",
  letterSpacing: "-0.02em",
  fontFamily: fontFamily || "SFProBold",
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
  height: toggle ? "220px" : "0px",

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
  fontFamily: "SFProRegular",
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
  padding: "6px",
  borderRadius: "50px",
  marginLeft: "auto",
  cursor: "pointer",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const SingleTabText = styled("p")<{
  textColor?: string;
}>(({ theme, textColor }) => ({
  color: textColor || "#0D0D0D",
  fontWeight: "400",
  fontSize: "16x",

  letterSpacing: "-0.02em",
  margin: "1rem 2rem",
  cursor: "pointer",
  fontFamily: "SFProRegular",
  [theme.breakpoints.down("md")]: {
    margin: "1rem 1rem",
  },
  [theme.breakpoints.down(600)]: {
    margin: "10px",
  },
}));

export const TabBox = styled(Box)<{ isShowColumnWise?: boolean }>(
  ({ theme, isShowColumnWise }) => ({
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: isShowColumnWise ? "column" : "row",
      borderRight: "none",
      alignItems: "flex-start",
      marginTop: "0px",
      flexWrap: "wrap",
    },
  })
);

export const TitleLarge = styled("p")<{
  textAlign?: "start" | "end" | "center";
}>(({ theme, textAlign }) => ({
  color: "#0D0D0D",
  fontWeight: "800",
  fontSize: "75px",
  textAlign: textAlign || "center",
  margin: "0px",
  fontFamily: "SFProBold",
  [theme.breakpoints.down(600)]: {
    fontSize: "45px",
  },
  [theme.breakpoints.down(350)]: {
    fontSize: "35px",
  },
}));

export const MobileBr = styled("br")(({ theme }) => ({
  [theme.breakpoints.up(600)]: {
    display: "none",
  },
}));

export const DesktopBr = styled("br")(({ theme }) => ({
  [theme.breakpoints.down(600)]: {
    display: "none",
  },
}));
export const TitleMedium = styled("p")<{
  textAlign?: "start" | "end" | "center";
}>(({ textAlign, theme }) => ({
  color: "#0D0D0D",
  fontWeight: "800",
  fontSize: "55px",
  textAlign: textAlign || "center",
  margin: "0px",
  fontFamily: "SFProBold",
  [theme.breakpoints.down(762)]: {
    fontSize: "35px",
  },
}));

export const CardTitle = styled("p")<{ textColor?: string }>(
  ({ theme, textColor }) => ({
    fontSize: "30px",
    fontWeight: 800,
    margin: "0px",
    color: textColor || "#0D0D0D",
    fontFamily: "SFProBold",
    [theme.breakpoints.down(600)]: {
      fontSize: "25px",
    },
  })
);

export const SubTitle = styled("p")<{
  textAlign?: "start" | "end" | "center";
  textColor?: string;
}>(({ textAlign, textColor, theme }) => ({
  color: textColor || "#0D0D0D",
  fontWeight: "400",
  fontSize: "22px",
  textAlign: textAlign || "center",
  margin: "0px",
  fontFamily: "SFProRegular",
  [theme.breakpoints.down(1200)]: {
    fontSize: "18px",
  },
}));

export const SubTitleSmall = styled("p")<{
  textAlign?: "start" | "end" | "center";
  textColor?: string;
}>(({ textAlign, textColor, theme }) => ({
  color: textColor || "#0D0D0D",
  fontWeight: "400",
  fontSize: "18px",
  textAlign: textAlign || "center",
  margin: "0px",
  fontFamily: "SFProRegular",
  [theme.breakpoints.down(1200)]: {
    fontSize: "15px",
  },
}));

export const HeroWrapper = styled("div")(({ theme }) => ({
  paddingTop: "50px",
  [theme.breakpoints.down(600)]: {
    paddingTop: "30px",
  },
}));

export const BackersWrapper = styled("div")(({ theme }) => ({
  width: "80%",
  margin: "auto",
  [theme.breakpoints.down(600)]: {
    width: "95%",
  },
}));

export const ServicesWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "80%",
  margin: "auto",
  marginTop: "150px",
  justifyContent: "center",
  [theme.breakpoints.down(1200)]: {
    width: "99%",
  },

  [theme.breakpoints.down(600)]: {
    width: "95%",
    marginTop: "100px",
  },
}));

export const ServicesListWrapper = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: "20px",
}));

export const CommunityWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "80%",
  margin: "70px auto",
  [theme.breakpoints.down(772)]: {
    width: "90%",
  },
  [theme.breakpoints.down(600)]: {
    width: "100%",
    alignItems: "center",
  },
}));

export const CommunityListWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginTop: "30px",

  [theme.breakpoints.down(600)]: {
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

export const BackersListWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  margin: "auto",
  justifyContent: "space-between",
  flexWrap: "wrap",
  marginTop: "60px",
  [theme.breakpoints.down(600)]: {
    justifyContent: "center",
    marginTop: "30px",
    width: "100%",
  },
}));

export const CardWrapper = styled("div")<{ backgroundColor: string }>(
  ({ theme, backgroundColor }) => ({
    width: "550px",

    margin: "10px",
    borderRadius: "15px",
    display: "flex",
    background: backgroundColor,
    overflow: "hidden",
    position: "relative",
    justifyContent: "flex-start",
    height: "320px",
    [theme.breakpoints.down(1200)]: {
      width: "400px",
      height: "300px",
    },
    [theme.breakpoints.down(860)]: {
      width: "350px",
      height: "300px",
    },
    [theme.breakpoints.down(740)]: {
      width: "320px",
      height: "300px",
    },
    [theme.breakpoints.down(690)]: {
      width: "300px",
      height: "300px",
    },
    [theme.breakpoints.down(690)]: {
      width: "295px",
      height: "300px",
    },
    [theme.breakpoints.down(600)]: {
      width: "100%",
      margin: "0px",

      marginBottom: "10px",
      // height: "400px",
    },
  })
);

export const RegisterationBannerWrapper = styled("div")(({ theme }) => ({
  background: "#121212",
  position: "relative",
  // height: "1400px",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  [theme.breakpoints.down(600)]: {
    padding: "5px",
  },
}));

export const FooterLogoWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  color: "#fff !important",
  alignItems: "center",

  width: "90%",
  margin: "auto",
  flexWrap: "wrap",
  zIndex: 10,
  marginTop: "100px",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
}));
export const CardLeftBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "30px 20px",
  // height: "200px",
  width: "280px",
  [theme.breakpoints.down(1200)]: { width: "240px" },
  [theme.breakpoints.down(860)]: {
    width: "220px",
    height: "250px",
  },
  [theme.breakpoints.down(740)]: {
    width: "200px",
    height: "225px",
    padding: "30px 10px",
  },
  [theme.breakpoints.down(690)]: {
    width: "180px",
    height: "275px",
    padding: "10px 10px",
  },
  [theme.breakpoints.down(600)]: {
    height: "80%",
    padding: "20px 10px",
    width: "60%",
    margin: "0px",
  },
}));

export const CardRightBox = styled("div")<{ bottom: number; right: number }>(
  ({ bottom, right, theme }) => ({
    display: "flex",
    alignItems: "flex-end",
    position: "absolute",
    bottom,
    right,
    [theme.breakpoints.down(500)]: {
      bottom: 0,
      right: 0,
    },
  })
);

export const CommunityBox = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#121212",
  width: "250px",
  height: "150px",
  margin: "10px",
  borderRadius: "10px",
  [theme.breakpoints.down(600)]: {
    width: "200px",
  },
  [theme.breakpoints.down(450)]: {
    width: "170px",
  },
  [theme.breakpoints.down(400)]: {
    width: "150px",
  },
  [theme.breakpoints.down(350)]: {
    width: "140px",
  },
}));

export const StyledLink = styled("a")(() => ({
  textDecoration: "none",
}));

export const BannerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down(1200)]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down(600)]: {
    flexDirection: "column-reverse",
    // padding: "20px",
    marginTop: "40px",
  },
}));

export const BorderBoxWrapper = styled("div")(({ theme }) => ({
  border: "2px solid #B2B2B2 ",
  padding: "15px 30px",
  width: "40%",
  display: "flex",
  flexDirection: "column",

  borderRadius: "10px",
  margin: "10px",
  [theme.breakpoints.down(600)]: {
    width: "100%",
    margin: "0px",
    marginBottom: "10px",
    padding: "5px 10px",
  },
}));

export const IllustrationLogoWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: "50px",
}));
export const BorderBoxParent = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
}));

export const BorderBoxFooter = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
