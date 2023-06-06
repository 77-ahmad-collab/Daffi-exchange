import React, { useMemo } from "react";
import { Discord, Medium, Telegram, Twitter } from "../../assets/images";
import {
  CommunityBox,
  CommunityListWrapper,
  CommunityWrapper,
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
    <CommunityWrapper>
      <TitleMedium textAlign="start">
        Join the <br />
        Community
      </TitleMedium>
      <SubTitle textAlign="start" style={{ marginTop: "15px" }}>
        Join a fast-growing community of traders and web2 users <br /> connected
        all over the world, building the new era of internet
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
