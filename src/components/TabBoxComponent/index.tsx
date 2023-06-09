import React, { FC } from "react";
import { TabBoxComponentProps as PROPS } from "../../interfaces";
import { SingleTabText, StyledLink, TabBox } from "../styled";
// import { HashLink } from "react-router-hash-link";

const TabBoxComponent: FC<PROPS> = ({ tabs, textColor, isShowColumnWise }) => {
  return (
    <TabBox isShowColumnWise={isShowColumnWise}>
      {tabs.map((tab, key) => {
        return (
          <StyledLink href={`#${tab.section}`}>
            <SingleTabText
              key={key}
              textColor={textColor}
              onClick={() => {
                console.log(tab.onClick);
                if (tab.onClick) tab.onClick();
              }}
            >
              {tab.name}
            </SingleTabText>
          </StyledLink>
        );
      })}
    </TabBox>
  );
};

export default TabBoxComponent;
