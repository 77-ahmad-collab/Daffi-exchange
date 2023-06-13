import { motion } from "framer-motion";
import { FC } from "react";
import { Arrow } from "../../assets/images";
import { BorderBoxFooter, BorderBoxWrapper, SubTitle } from "../styled";

const BorderBox: FC<{
  mainLogo: string;
  secondaryLogo: string;
  text: string;
}> = ({ mainLogo, secondaryLogo, text }) => {
  const variants = {
    initial: { scale: 1 },
    animate: { scale: 1 },
  };

  return (
    <BorderBoxWrapper
      className="content-box"
      initial="initial"
      whileHover="animate"
      variants={variants}
    >
      <motion.div className="overlay">
        <p style={{ border: "2px solid red", color: "#fff", zIndex: 2000 }}>
          Overlay content
        </p>
      </motion.div>
      <img
        src={Arrow}
        alt="arrow"
        className="arrow"
        style={{ alignSelf: "flex-end" }}
      />
      <img
        src={mainLogo}
        alt="logo"
        width={100}
        height={100}
        className="registerMainLogo"
      />
      <BorderBoxFooter>
        <img
          src={secondaryLogo}
          alt="BuyorSignup"
          width={150}
          height={150}
          className="registerSecondaryLogo"
        />
        <SubTitle textColor="#fff" style={{ opacity: 0.6 }}>
          {text}
        </SubTitle>
      </BorderBoxFooter>
    </BorderBoxWrapper>
  );
};

export default BorderBox;
