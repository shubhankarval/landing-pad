import Image from "next/image";
import { twMerge } from "tailwind-merge";


interface VectorProps{
    className?:string;
    vectorNumber: number;
}

export default function Vector({className, vectorNumber} : VectorProps) {
  return (
    <Image
      src={`/hydra/vector-${vectorNumber}.svg`}
      alt=""
      height={0}
      width={0}
      className={twMerge("absolute z-[-1] w-fit", className)}
    />
  );
}
