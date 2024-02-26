import {twMerge} from 'tailwind-merge';

interface ButtonProps{
    text: string;
    className?:string;
}

export default function Button({text, className}: ButtonProps) {
  return (
    <button className={twMerge("bg-navy-blue px-12 py-4 font-bold text-white", className)}>
      {text}
    </button>
  );
}
