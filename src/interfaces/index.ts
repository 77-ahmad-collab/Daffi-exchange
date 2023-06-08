export type TabBoxComponentProps = {
  tabs: {
    name: string;
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
};
