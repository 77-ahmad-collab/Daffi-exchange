import { HeroImage } from "../../assets/images";
import { HeroWrapper, TitleLarge } from "../styled";

const Hero = () => {
  return (
    <HeroWrapper>
      <TitleLarge>Trade Without Limits</TitleLarge>
      <img
        src={HeroImage}
        alt="hero"
        width={"100%"}
        height={"550px"}
        className="heroImage"
      />
    </HeroWrapper>
  );
};

export default Hero;
