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
      { imageSrc: Twitter, link: "https://twitter.com/dafiprotocol" },
      { imageSrc: Discord, link: "https://discord.com/invite/bwpCueVD8t" },
      { imageSrc: Telegram, link: "https://t.me/dafiprotocol" },
      { imageSrc: Medium, link: "https://dafiprotocol.medium.com/" },
    ],
    []
  );

  return (
    <CommunityWrapper id="community">
      <TitleMedium textAlign={isMobile ? "center" : "start"} fontSize={90}>
        Join the <DesktopBr /> Community
      </TitleMedium>
      <SubTitle
        textAlign={isMobile ? "start" : "start"}
        style={{ width: "80%", margin: "auto", marginTop: "40px" }}
      >
        Join a fast-growing community of traders and web2 users <DesktopBr />{" "}
        connected all over the world, building the new era of internet
      </SubTitle>
      <CommunityListWrapper>
        {CommunityList.map(({ imageSrc, link }, index) => {
          return (
            <CommunityBox
              className="cursor"
              key={index}
              onClick={() => window.open(link)}
            >
              <img src={imageSrc} width="45px" alt="CommunityLogo" />
            </CommunityBox>
          );
        })}
      </CommunityListWrapper>
    </CommunityWrapper>
  );
};

export default Community;
