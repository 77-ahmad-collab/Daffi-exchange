export type TabBoxComponentProps = {
  tabs: {
    name: string;
    section: string;
    onClick?: () => void;
  }[];
  textColor?: string;
  isShowColumnWise?: boolean;
};

export type CardProps = {
  title: string;
  secondaryTitle: string;
  subTitle: string;
  imageSrc: string;
  link: string;
  backgroundColor: string;
  bottom: number;
  right: number;
  handleClick: () => void;
};
export type BasicModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactElement;
};

export type RegisterationModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
};
