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
        link: "",
      },
      {
        image: Spark,
        link: "",
      },
      {
        image: Capital,
        link: "",
      },
      {
        image: MorningStar,
        link: "",
      },
      {
        image: LD,
        link: "",
      },
      {
        image: SL2,
        link: "",
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
            />
          );
        })}
      </BackersListWrapper>
    </BackersWrapper>
  );
};

export default Backers;
