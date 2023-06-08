import { useMemo } from "react";
import { isMobile } from "react-device-detect";
import {
  BottomGradient,
  BuyDafi,
  Dafi,
  Illustration,
  Plus,
  SignUp,
} from "../../assets/images";
import BorderBox from "../borderBox";
import {
  BannerHeader,
  BorderBoxParent,
  FooterLogoWrapper,
  IllustrationLogoWrapper,
  LogoTitle,
  RegisterationBannerWrapper,
  SubTitle,
} from "../styled";
import TabBoxComponent from "../TabBoxComponent";

const RegisterationBanner = () => {
  const tabs = useMemo(
    () => [
      { name: "Backers" },
      {
        name: "About",
      },
      { name: "Community" },
      { name: "Docs" },
    ],
    []
  );
  return (
    <RegisterationBannerWrapper>
      <BannerHeader>
        <img alt="Illustration" src={Illustration} className="Illustration" />
        <IllustrationLogoWrapper>
          <LogoTitle
            color={"#fff"}
            style={{
              fontSize: isMobile ? "90px" : "190px",

              height: isMobile ? "100px" : "150px",
            }}
          >
            DeFi
          </LogoTitle>
          <LogoTitle
            color={"#fff"}
            style={{
              fontSize: isMobile ? "90px" : "190px",

              height: isMobile ? "100px" : "150px",
            }}
          >
            Made
          </LogoTitle>
          <LogoTitle
            color={"#fff"}
            style={{
              fontSize: isMobile ? "90px" : "190px",

              height: isMobile ? "100px" : "150px",
            }}
          >
            Right
          </LogoTitle>
        </IllustrationLogoWrapper>
      </BannerHeader>
      <BorderBoxParent>
        <BorderBox mainLogo={Plus} secondaryLogo={SignUp} text="78,928 users" />
        <BorderBox mainLogo={Dafi} secondaryLogo={BuyDafi} text="$0.008105" />
      </BorderBoxParent>

      <FooterLogoWrapper>
        <SubTitle
          textColor="#fff"
          textAlign="start"
          style={{ marginLeft: "18px" }}
        >
          dafi
        </SubTitle>
        <TabBoxComponent
          tabs={tabs}
          textColor="#ffffff"
          isShowColumnWise={false}
        />
      </FooterLogoWrapper>
      <SubTitle
        textColor="#ffffff"
        style={{ fontSize: 18, marginTop: "50px", zIndex: 2 }}
      >
        {" "}
        2023 ALL RIGHTS RESERVED
      </SubTitle>
      <img
        src={BottomGradient}
        alt="bottomGradient"
        width={"100%"}
        style={{
          position: "absolute",
          bottom: "0px",
          left: "0px",
          opacity: 0.7,
          zIndex: 1,
        }}
      />
    </RegisterationBannerWrapper>
  );
};

export default RegisterationBanner;
