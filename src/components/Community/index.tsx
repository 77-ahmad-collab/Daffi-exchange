import React, { useMemo } from "react";
import { isMobile } from "react-device-detect";
import { Discord, Medium, Telegram, Twitter } from "../../assets/images";
import {
  CommunityBox,
  CommunityListWrapper,
  CommunityWrapper,
  DesktopBr,
  SubTitle,
  TitleMedium,
} from "../styled";

const Community = () => {
  const CommunityList = useMemo(
    () => [
      { imageSrc: Twitter, link: "" },
      { imageSrc: Discord, link: "" },
      { imageSrc: Telegram, link: "" },
      { imageSrc: Medium, link: "" },
    ],
    []
  );

  return (
    <CommunityWrapper id="section1">
      <TitleMedium textAlign={isMobile ? "center" : "start"}>
        Join the <DesktopBr /> Community
      </TitleMedium>
      <SubTitle
        textAlign={isMobile ? "center" : "start"}
        style={{ marginTop: "15px" }}
      >
        Join a fast-growing community of traders and web2 users <DesktopBr />{" "}
        connected all over the world, building the new era of internet
      </SubTitle>
      <CommunityListWrapper>
        {CommunityList.map(({ imageSrc }, index) => {
          return (
            <CommunityBox className="cursor" key={index}>
              <img src={imageSrc} width="45px" alt="CommunityLogo" />
            </CommunityBox>
          );
        })}
      </CommunityListWrapper>
    </CommunityWrapper>
  );
};

export default Community;
