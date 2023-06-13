import { HeroImage } from "../../assets/images";
import { HeroWrapper, MobileBr, TitleLarge } from "../styled";

const Hero = () => {
  return (
    <HeroWrapper>
      <TitleLarge>
        Trade <MobileBr /> Without Limits
      </TitleLarge>
      <img src={HeroImage} alt="hero" width={"100%"} className="heroImage" />
    </HeroWrapper>
  );
};

export default Hero;
