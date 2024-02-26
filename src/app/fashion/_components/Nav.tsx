import Link from "next/link";

interface FooterNavProps {
  heading: string;
  items: string[];
}

export default function FooterNav({ heading, items }: FooterNavProps) {
  return (
    <nav className="flex flex-col gap-3 w-full">
      <h6 className="mb-2 text-white">{heading}</h6>
      {items.map((item, index) => (
        <Link href="" key={index}>
          {item}
        </Link>
      ))}
    </nav>
  );
}
