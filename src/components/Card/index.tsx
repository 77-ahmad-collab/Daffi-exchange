import React, { FC } from "react";
import { CardProps as PROPS } from "../../interfaces";
import {
  CardLeftBox,
  CardRightBox,
  CardTitle,
  CardWrapper,
  SubTitleSmall,
  SyledButton,
} from "../styled";

const Card: FC<PROPS> = ({
  title,
  secondaryTitle,
  subTitle,
  imageSrc,
  backgroundColor,
  bottom,
  right,
}) => {
  return (
    <CardWrapper backgroundColor={backgroundColor}>
      <CardLeftBox>
        <div>
          <CardTitle textColor="#fff" style={{ marginTop: "15px" }}>
            {" "}
            {title}
          </CardTitle>
          <CardTitle textColor="#fff">{secondaryTitle}</CardTitle>
        </div>
        <SubTitleSmall textColor="#fff" textAlign="start">
          {subTitle}
        </SubTitleSmall>
        <SyledButton variant="contained" style={{ marginTop: "20px" }}>
          {" "}
          Get Started
        </SyledButton>
      </CardLeftBox>
      <CardRightBox bottom={bottom} right={right}>
        <img src={imageSrc} alt="rightBoxImage" className="rightBoxImage" />
      </CardRightBox>
    </CardWrapper>
  );
};

export default Card;
