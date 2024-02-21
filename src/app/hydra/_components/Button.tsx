import { twMerge } from "tailwind-merge";

interface ButtonProps {
  text: string;
  className?: string;
}

export default function Button({ text, className }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "h-12 w-fit rounded-full bg-gradient-colors bg-gradient-to-r px-9 text-xs text-[#302C42]",
        className,
      )}
    >
      {text}
    </button>
  );
}
