import { BottomGradient, Illustration } from "../../assets/images";
import { BannerHeader, LogoTitle, RegisterationBannerWrapper } from "../styled";

const RegisterationBanner = () => {
  return (
    <RegisterationBannerWrapper>
      <BannerHeader>
        <img alt="Illustration" src={Illustration} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "50px",
          }}
        >
          <LogoTitle
            color={"#fff"}
            style={{
              fontSize: "190px",

              height: "150px",
            }}
          >
            DeFi
          </LogoTitle>
          <LogoTitle
            color={"#fff"}
            style={{
              fontSize: "190px",

              height: "150px",
            }}
          >
            Made
          </LogoTitle>
          <LogoTitle color={"#fff"} style={{ fontSize: "190px" }}>
            Right
          </LogoTitle>
        </div>
      </BannerHeader>

      <img
        src={BottomGradient}
        alt="bottomGradient"
        width={"100%"}
        style={{ position: "absolute", bottom: "0px", left: "0px" }}
      />
    </RegisterationBannerWrapper>
  );
};

export default RegisterationBanner;
