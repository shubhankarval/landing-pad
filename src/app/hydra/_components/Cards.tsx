import Image from "next/image";
import Button from "./Button";

export default function Cards() {
  const cardHeadings = [
    "SIMULATION",
    "EDUCATION",
    "SELF-CARE",
    "OUTDOOR",
  ];

  return (
    <div className="flex gap-5">
      {cardHeadings.map((heading, index) => (
        <div
          className="bg-gradient-radial flex flex-col items-center gap-8 rounded-3xl from-[#433D60] to-[#211E2E] p-10 pt-7"
          key={index}
        >
          <Image
            src={`/hydra/card-img-${index + 1}.svg`}
            alt=""
            height={150}
            width={150}
          />
          <div className="flex w-min flex-col items-center gap-4">
            <h3 className="text-nowrap text-2xl">{heading}</h3>
            <Image
              src="/hydra/horizontal-line.svg"
              alt=""
              height={0}
              width={0}
              className="h-0.5 w-fit"
            />
          </div>
          <p className="text-sm">
            Vitae sapien pellentesque habitant morbi nunc. Viverra
            aliquet porttitor rhoncus libero justo laoreet sit amet
            vitae.
          </p>
          <Button text="TRY IT NOW" />
        </div>
      ))}
    </div>
  );
}
