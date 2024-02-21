import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface IconProps {
  iconType: string;
  iconNumber: number;
  className?: string;
}

export default function Icon({ iconType, iconNumber, className }: IconProps) {
  return (
    <Image
      src={`/analytics/${iconType}-icon-${iconNumber}.svg`}
      alt=""
      height={0}
      width={0}
      className={className}
    />
  );
}
