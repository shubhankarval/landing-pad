import { twJoin } from "tailwind-merge";

const stats = [
  { number: 250, title: "Store Branches" },
  { number: 7000, title: "Product Sold" },
  { number: 3000, title: "5 Star Reviews" },
];

export default function Stats() {
  return (
    <div className="flex gap-10">
      {stats.map((item, index) => (
        <div
          key={index}
          className={twJoin(
            "flex h-36 w-36 flex-col items-center justify-center gap-1 border border-navy-blue",
            index === 1 ? "bg-navy-blue text-white" : "bg-transparent",
          )}
        >
          <span className="font-play text-4xl">{item.number}+</span>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}
