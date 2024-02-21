import Image from "next/image";
import { twJoin } from "tailwind-merge";
import Button from './Button';

const pricesData = [
  {
    heading: "Starter",
    users: 3,
    price: 29,
  },
  {
    heading: "Standard",
    users: 20,
    price: 99,
  },
  {
    heading: "Premium",
    users: 200,
    price: 299,
  },
];

export default function Prices() {
  const style1 = "bg-[#11214e]";
  const style2 = "bg-white text-[#172755]";
  return (
    <div className="flex w-full justify-between">
      {pricesData.map((item, index) => (
        <div
          key={index}
          className={twJoin(
            "rounded-3xl px-16 pb-16 pt-12",
            index === 1 ? style2 : style1,
          )}
        >
          <h3>{item.heading}</h3>
          <p className="mt-3">{`upto ${item.users} per month`}</p>
          <Image
            src={`/analytics/splitter.svg`}
            alt=""
            height={10}
            width={10}
            className="my-8 w-full"
          />
          <div className="text-6xl font-bold">
            <span className="text-3xl">$</span>
            {item.price}
          </div>
          <p className="mt-1 text-sm mb-10">per month</p>
            <Button text="Order" buttonType={index === 1 ? 1 : 2} className="px-20 py-3"/>
        </div>
      ))}
    </div>
  );
}
