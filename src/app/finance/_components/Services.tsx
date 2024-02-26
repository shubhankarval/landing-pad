import Image from "next/image";
import { twJoin } from "tailwind-merge";

const services = [
  "Local Business Finance",
  "Built for global payments",
  "Make internet of Money",
];

export default function Services() {
  return (
    <div className="flex">
      {services.map((heading, index) => (
        <div
          className={twJoin(
            "flex flex-col gap-5 border border-[#2e2e2e] p-10",
            index === 1 ? "bg-[#2e2e2e]" : "bg-transparent",
          )}
          key={index}
        >
          <div
            className={twJoin(
              "flex h-10 w-10 items-center justify-center",
              index === 1 ? "bg-[#cbfc01]" : "bg-white",
            )}
          >
            <Image
              src={`/finance/services-icon-${index + 1}.svg`}
              alt=""
              width={0}
              height={0}
              className="w-1/2"
            />
          </div>
          <h5 className="max-w-xs text-3xl font-bold">{heading}</h5>
          <p className="max-w-56">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
          </p>
          <button className="flex items-center gap-2 border-none font-sato font-bold">
            Learn More
            <Image
              src="/finance/arrow-icon.svg"
              alt=""
              height={15}
              width={15}
            />
          </button>
        </div>
      ))}
    </div>
  );
}
