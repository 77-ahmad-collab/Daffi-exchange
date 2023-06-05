import React, { useMemo } from "react";
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
      { imageSrc: "", link: "" },
      { imageSrc: "", link: "" },
      { imageSrc: "", link: "" },
      { imageSrc: "", link: "" },
    ],
    []
  );
  return (
    <CommunityWrapper>
      <TitleMedium textAlign="start">
        Join the <br />
        Community
      </TitleMedium>
      <SubTitle>
        Join a fast-growing community of traders and web2 users connected all
        over the world, building the new era of internet
      </SubTitle>
      <CommunityListWrapper>
        {CommunityList.map(({ imageSrc }) => {
          return (
            <CommunityBox>
              <img src={imageSrc} width="45px" alt="CommunityLogo" />
            </CommunityBox>
          );
        })}
      </CommunityListWrapper>
    </CommunityWrapper>
  );
};

export default Community;
