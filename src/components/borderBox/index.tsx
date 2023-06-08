import { FC } from "react";
import { Plus, SignUp } from "../../assets/images";
import { BorderBoxFooter, BorderBoxWrapper, SubTitle } from "../styled";

const BorderBox: FC<{
  mainLogo: string;
  secondaryLogo: string;
  text: string;
}> = ({ mainLogo, secondaryLogo, text }) => {
  return (
    <BorderBoxWrapper>
      <img src="" alt="arrow" width={45} height={45} />
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
