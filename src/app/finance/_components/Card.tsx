import Image from "next/image";
import {twMerge} from 'tailwind-merge';

interface CardProps{
  bg1?: string;
  bg2?: string;
}

export default function Card({bg1, bg2} : CardProps) {
  return (
    <div className={twMerge("w-[350px] border border-[#2e2e2e] bg-transparent px-10 py-14", bg1)}>
      <div className="flex flex-col gap-7">
        <div className="w-10 border"></div>
        <h4 className="text-xl font-medium">Checking Accounts</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>
      </div>
      <div className="flex w-full justify-end">
        <div className={twMerge("mt-20 flex h-10 w-10 items-center justify-center bg-white", bg2)}>
          <Image
            src="/finance/up-arrow-icon.svg"
            alt=""
            width={0}
            height={0}
            className="w-1/2"
          />
        </div>
      </div>
    </div>
  );
}
