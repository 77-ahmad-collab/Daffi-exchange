import React, { useMemo } from "react";
import Card from "../Card";
import {
  ServicesListWrapper,
  ServicesWrapper,
  SubTitle,
  TitleMedium,
} from "../styled";

const Services = () => {
  const ServiceList = useMemo(
    () => [
      {
        title: "NO WALLET?",
        secondaryTitle: "No Problem!",
        subTitle:
          "Create your DAFI account and have full custody of your crypto.",
        imageSrc: "",
        link: "",
        backgroundColor: "#0052FE",
      },
      {
        title: "Order up!",
        secondaryTitle: "",
        subTitle:
          "Set buy and sell orders for your favorite tokens and trade with ease.",
        imageSrc: "",
        link: "",
        backgroundColor: "#6A27EA",
      },
      {
        title: "Refer & earn",
        secondaryTitle: "",
        subTitle: "Invite your friends to use DAFI and earn as they trade.",
        imageSrc: "",
        link: "",
        backgroundColor: "#FC7A1E",
      },
      {
        title: "Super Staking",
        secondaryTitle: "",
        subTitle:
          "Stake $DAFI and earn passive rewards from global trading activity.",
        imageSrc: "",
        link: "",
        backgroundColor: "#ED217C",
      },
    ],
    []
  );

  return (
    <ServicesWrapper>
      <TitleMedium textAlign="center">
        The Best
        <br />
        of Both Worlds
      </TitleMedium>
      <SubTitle>
        The DAFI Hybrid Exchange combines CEX user experience with DEX security
        and self custody.
      </SubTitle>

      <ServicesListWrapper>
        {ServiceList.map(
          ({
            title,
            imageSrc,
            link,
            backgroundColor,
            secondaryTitle,
            subTitle,
          }) => {
            return (
              <Card
                title={title}
                backgroundColor={backgroundColor}
                link={link}
                imageSrc={imageSrc}
                secondaryTitle={secondaryTitle}
                subTitle={subTitle}
              />
            );
          }
        )}
      </ServicesListWrapper>
    </ServicesWrapper>
  );
};

export default Services;
