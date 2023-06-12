import { useMemo } from "react";

import { Earn, Order, SuperStaking, Wallet } from "../../assets/images";
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
        secondaryTitle: "NO PROBLEM!",
        subTitle:
          "Create your DAFI account and have full custody of your crypto.",
        imageSrc: Wallet,
        link: "",
        backgroundColor: "#0052FE",
        bottom: 0,
        right: 0,
      },
      {
        title: "ORDER UP!",
        secondaryTitle: "",
        subTitle:
          "Set buy and sell orders for your favorite tokens and trade with ease.",
        imageSrc: Order,
        link: "",
        backgroundColor: "#6A27EA",
        bottom: 10,
        right: 0,
      },
      {
        title: "REFER & EARN",
        secondaryTitle: "",
        subTitle: "Invite your friends to use DAFI and earn as they trade.",
        imageSrc: Earn,
        link: "",
        backgroundColor: "#FC7A1E",
        bottom: 20,
        right: 20,
      },
      {
        title: "SUPER STAKING",
        secondaryTitle: "",
        subTitle:
          "Stake $DAFI and earn passive rewards from global trading activity.",
        imageSrc: SuperStaking,
        link: "",
        backgroundColor: "#ED217C",
        bottom: 0,
        right: 0,
      },
    ],
    []
  );

  return (
    <ServicesWrapper id="about">
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
          (
            {
              title,
              imageSrc,
              link,
              backgroundColor,
              secondaryTitle,
              subTitle,
              bottom,
              right,
            },
            index
          ) => {
            return (
              <Card
                key={index}
                title={title}
                backgroundColor={backgroundColor}
                link={link}
                imageSrc={imageSrc}
                secondaryTitle={secondaryTitle}
                subTitle={subTitle}
                bottom={bottom}
                right={right}
              />
            );
          }
        )}
      </ServicesListWrapper>
    </ServicesWrapper>
  );
};

export default Services;
