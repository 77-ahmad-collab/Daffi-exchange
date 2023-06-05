import React, { FC } from "react";
import { CardProps as PROPS } from "../../interfaces";
import {
  CardLeftBox,
  CardRightBox,
  CardTitle,
  SubTitle,
  SyledButton,
} from "../styled";

const Card: FC<PROPS> = ({ title, secondaryTitle, subTitle, imageSrc }) => {
  return (
    <div
      style={{
        border: "2px solid red",
        width: "35%",
        margin: "10px",
        borderRadius: "15px",
        display: "flex",
      }}
    >
      <CardLeftBox>
        <CardTitle>{title}</CardTitle>
        <CardTitle>{secondaryTitle}</CardTitle>
        <SubTitle textAlign="start">{subTitle}</SubTitle>
        <SyledButton variant="contained"> Get Started</SyledButton>
      </CardLeftBox>
      <CardRightBox>
        <img src={imageSrc} alt="rightBoxImage" />
      </CardRightBox>
    </div>
  );
};

export default Card;
