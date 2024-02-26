import Image from "next/image";

const companies = ["paypal", "webflow", "google", "amazon", "adobe"];

export default function Logos() {
  return (
    <section className="flex justify-between items-center bg-[#CBFC01] py-20">
      {companies.map((company, index) => (
        <div key={index}>
          <Image
            src={`/finance/${company}-logo.svg`}
            alt=""
            height={100}
            width={100}
            className="w-full"
          />
        </div>
      ))}
    </section>
  );
}
