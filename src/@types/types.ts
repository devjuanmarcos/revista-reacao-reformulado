import { IconType } from "react-icons";

type NextImageType = {
  imageUrl: string;
  imageDarkUrl?: string;
  altImage: string;
  extraClassName?: string;
  className?: string;
  sizes: string;
  fill?: boolean;
  draggable?: boolean;
  width?: number;
  height: number;
};

type IconProps = {
  Icon: IconType;
  url: string;
  size?: string;
  color?: string;
  alt: string;
};

type AdvertisingSectionProps = {
  href?: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

export type { NextImageType, IconProps, AdvertisingSectionProps };
