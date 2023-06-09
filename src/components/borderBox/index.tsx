import { FC } from "react";
import { Arrow } from "../../assets/images";
import { BorderBoxFooter, BorderBoxWrapper, SubTitle } from "../styled";

const BorderBox: FC<{
  mainLogo: string;
  secondaryLogo: string;
  text: string;
}> = ({ mainLogo, secondaryLogo, text }) => {
  return (
    <BorderBoxWrapper>
      <img
        src={Arrow}
        alt="arrow"
        width={35}
        height={35}
        style={{ alignSelf: "flex-end" }}
      />
      <img src={mainLogo} alt="logo" width={100} height={100} />
      <BorderBoxFooter>
        <img src={secondaryLogo} alt="BuyorSignup" width={150} height={150} />
        <SubTitle textColor="#fff" style={{ opacity: 0.9 }}>
          {text}
        </SubTitle>
      </BorderBoxFooter>
    </BorderBoxWrapper>
  );
};

export default BorderBox;
