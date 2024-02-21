import Image from "next/image";

export default function Info() {
  const info = [
    {
      icon: "/hydra/location-icon.svg",
      heading: "Pay Us A Visit",
      message: "Union St, Seattle, WA 98101, United States",
    },
    {
      icon: "/hydra/phone-icon.svg",
      heading: "Give Us A Call",
      message: "(110) 1111-1010",
    },
    {
      icon: "/hydra/mail-icon.svg",
      heading: "Send Us A Message",
      message: "Contact@HydraVTech.com",
    },
  ];
  return (
    <div className="bg-gradient-radial grid grid-cols-3 rounded-full from-[#3A3456] to-[#211E2E] py-5">
      {info.map((item, index) => (
        <div className="flex items-center" key={index}>
          <div className="flex flex-grow items-center justify-center gap-4">
            <Image src={item.icon} alt="" height={60} width={60} />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl">{item.heading}</h3>
              <p className="text-sm">{item.message}</p>
            </div>
          </div>
          {index <= 1 && (
            <Image
              src="/hydra/line.svg"
              alt=""
              height={1.7}
              width={1.7}
              className="flex-none"
            />
          )}
        </div>
      ))}
    </div>
  );
}
