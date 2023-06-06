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
    <BackersWrapper>
      <TitleMedium textAlign="start">Backers</TitleMedium>
      <BackersListWrapper>
        {BackersList.map((backer, key) => {
          return (
            <img
              key={key}
              src={backer.image}
              alt="bakerImage"
              width={150}
              height={150}
              className="cursor"
            />
          );
        })}
      </BackersListWrapper>
    </BackersWrapper>
  );
};

export default Backers;
