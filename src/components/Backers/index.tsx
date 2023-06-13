import React, { useMemo } from "react";
import {
  Capital,
  LD,
  MorningStar,
  RareStone,
  SL2,
  Spark,
} from "../../assets/images";
import { BackersListWrapper, BackersWrapper, TitleMedium } from "../styled";
import { isMobile } from "react-device-detect";

const Backers = () => {
  const BackersList = useMemo(
    () => [
      {
        image: RareStone,
        link: "https://rarestone.capital/",
      },
      {
        image: Spark,
        link: "https://sparkdigitalcapital.com/",
      },
      {
        image: Capital,
        link: "https://au21.capital/",
      },
      {
        image: MorningStar,
        link: "https://morningstar.ventures/",
      },
      {
        image: LD,
        link: "https://ldcap.com/",
      },
      {
        image: SL2,
        link: "https://sl2.capital/",
      },
    ],
    []
  );
  return (
    <BackersWrapper id="backers">
      <TitleMedium textAlign={isMobile ? "center" : "start"}>
        Backers
      </TitleMedium>
      <BackersListWrapper>
        {BackersList.map((backer, key) => {
          return (
            <img
              key={key}
              src={backer.image}
              alt="bakerImage"
              // width={150}
              // height={150}
              className="cursor backers"
              onClick={() => window.open(backer.link)}
            />
          );
        })}
      </BackersListWrapper>
    </BackersWrapper>
  );
};

export default Backers;
