import {twMerge} from 'tailwind-merge';

interface ButtonProps{
  text:string;
  buttonType: number;
  className?:string;
}

const button1 = 'text-white bg-[#EF2A82]';
const button2 = 'bg-transparent border border-[#2A407C]';

export default function Button({text, buttonType, className}: ButtonProps) {
  const button = buttonType === 1 ? button1 : button2;

  return (
    <button className={twMerge("rounded-full", button, className)}>
      {text}
    </button>
  )
}
