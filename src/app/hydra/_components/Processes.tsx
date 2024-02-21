import Image from "next/image";

export default function Processes() {
  const processData = [
    "3D Conception & Design",
    "Interaction Design",
    "VR World User Testing",
    "Hydra VR Deploy",
  ];
  // flex items-center justify-center
  return (
    <div className="flex justify-around">
      {processData.map((process, index) => (
        <div key={index}>
          <div className="relative">
            <Image
              src="/hydra/number-bg.svg"
              alt=""
              width={0}
              height={0}
              className="w-[220px]"
            />
            <div className="bg-gradient-colors absolute left-1/2 top-1/2 flex h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-gradient-to-r">
              <span className="text-6xl font-bold text-[#343045]">{`0${index + 1}`}</span>
            </div>
          </div>
          <div className="mt-10 flex items-start gap-4">
            <Image
              src="/hydra/arrow.svg"
              alt=""
              height={25}
              width={25}
              className="mt-1"
            />
            <h3 className="max-w-40 text-xl">{process}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
