import React, { FC } from "react";
import { TabBoxComponentProps as PROPS } from "../../interfaces";
import { SingleTabText, TabBox } from "../styled";
// import { HashLink } from "react-router-hash-link";

const TabBoxComponent: FC<PROPS> = ({ tabs, textColor, isShowColumnWise }) => {
  return (
    <TabBox isShowColumnWise={isShowColumnWise}>
      {tabs.map((tab, key) => {
        return (
          <a href="#section1">
            <SingleTabText key={key} textColor={textColor}>
              {tab.name}
            </SingleTabText>
          </a>
        );
      })}
    </TabBox>
  );
};

export default TabBoxComponent;
