import React, { FC, useState } from "react";
import { TabBoxComponentProps as PROPS } from "../../interfaces";
import { SingleTabText, StyledLink, TabBox } from "../styled";
// import { HashLink } from "react-router-hash-link";

const TabBoxComponent: FC<PROPS> = ({ tabs, textColor, isShowColumnWise }) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <TabBox isShowColumnWise={isShowColumnWise}>
      {tabs.map((tab, key) => {
        return (
          <StyledLink href={`#${tab.section}`} key={key}>
            <SingleTabText
              key={key}
              textColor={textColor}
              onClick={() => {
                console.log(tab.onClick);
                if (tab.onClick) tab.onClick();
                setTabIndex(key);
              }}
              style={{
                fontWeight: key === tabIndex && !textColor ? "bold" : "normal",
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
