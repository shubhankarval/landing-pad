import Image from "next/image";
import { twMerge } from "tailwind-merge";


interface HeadingProps {
  text1: string;
  text2: string;
  iconExists?: boolean;
  className?: string;
}

export default function Heading({
  text1,
  text2,
  iconExists,
  className
}: HeadingProps) {
  return (
    <div className={twMerge(className)}>
      <h2>{text1}</h2>
      {!iconExists ? (
        <h2 className="mt-2 font-light">{text2}</h2>
      ) : (
        <div className="flex items-center gap-5">
          <h2 className="font-light">{text2}</h2>
          <Image
            src="/hydra/long-arrow.svg"
            alt=""
            height={130}
            width={130}
          />
        </div>
      )}
    </div>
  );
}
