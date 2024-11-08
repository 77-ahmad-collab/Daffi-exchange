import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { isMobile } from "react-device-detect";
import {
  BottomGradient,
  BuyDafi,
  DaffiLogo,
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
  const [price, setPrice] = useState(0);
  const tabs = useMemo(
    () => [
      { name: "Backers", section: "backers" },
      {
        name: "About",
        section: "about",
      },
      { name: "Community", section: "community" },
      { name: "Docs", section: "" },
    ],
    []
  );

  useEffect(() => {
    (async () => {
      const coingeckoId = "dafi-protocol";
      const result = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coingeckoId}&vs_currencies=usd`
      );
      const price = result.data[coingeckoId].usd;
      setPrice(price);
    })();
  }, []);
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
        <BorderBox
          mainLogo={Plus}
          secondaryLogo={SignUp}
          text="78,928 users"
          box1={true}
        />
        <BorderBox
          mainLogo={Dafi}
          secondaryLogo={BuyDafi}
          text={`$${price.toFixed(5)}`}
          box1={false}
        />
      </BorderBoxParent>

      <FooterLogoWrapper>
        <img src={DaffiLogo} alt="daffiLogo" className="daffiLogo" />
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
        className="bottomGradient"
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
