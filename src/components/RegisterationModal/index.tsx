import React, { FC } from "react";
import { RegisterationModalProps as PROPS } from "../../interfaces";
import BasicModal from "../BasicModal";
import { Heading, RegisterationModalWrapper, StyledCloseIcon } from "../styled";

const Index: FC<PROPS> = ({ isModalOpen, closeModal }) => {
  return (
    <BasicModal open={isModalOpen} onClose={closeModal}>
      <RegisterationModalWrapper>
        <StyledCloseIcon onClick={closeModal} />

        <Heading
          style={{ padding: "0px", margin: "0px", lineHeight: "60px" }}
          fontSize="45px"
        >
          Coming Soon...
        </Heading>
      </RegisterationModalWrapper>
    </BasicModal>
  );
};

export default Index;
