import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface IconProps {
  imgName: string;
  className?: string;
}

export default function Img({ imgName, className }: IconProps) {
  return (
    <Image
      src={`/analytics/${imgName}.png`}
      alt=""
      height={2000}
      width={2000}
      className={className}
    />
  );
}
