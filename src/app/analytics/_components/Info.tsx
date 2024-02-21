import { twMerge } from "tailwind-merge";

interface InfoProps {
  heading: string;
  className?: string;
}

export default function Info({ heading, className }: InfoProps) {
  return (
    <div
      className={twMerge(
        "flex max-w-md flex-col justify-center gap-10",
        className,
      )}
    >
      <h2>{heading}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi
        aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh
        nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
        pulvinar sit amet.
      </p>
    </div>
  );
}
