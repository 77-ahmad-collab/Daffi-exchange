import React, { FC } from "react";
import { CardProps as PROPS } from "../../interfaces";
import {
  CardLeftBox,
  CardRightBox,
  CardTitle,
  CardWrapper,
  SubTitle,
  SyledButton,
} from "../styled";

const Card: FC<PROPS> = ({
  title,
  secondaryTitle,
  subTitle,
  imageSrc,
  backgroundColor,
  bottom,
}) => {
  return (
    <CardWrapper backgroundColor={backgroundColor}>
      <CardLeftBox>
        <div>
          <CardTitle textColor="#fff">{title}</CardTitle>
          <CardTitle textColor="#fff">{secondaryTitle}</CardTitle>
        </div>
        <SubTitle textColor="#fff" textAlign="start">
          {subTitle}
        </SubTitle>
        <SyledButton variant="contained"> Get Started</SyledButton>
      </CardLeftBox>
      <CardRightBox bottom={bottom}>
        <img src={imageSrc} alt="rightBoxImage" className="rightBoxImage" />
      </CardRightBox>
    </CardWrapper>
  );
};

export default Card;
