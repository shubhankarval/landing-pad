import Image from "@components/Image";

interface CardProps {
  imgUrl: string;
  text?: string;
  price: number;
}

export default function Card({ imgUrl, text, price }: CardProps) {
  return (
    <div>
      <Image src={imgUrl} width={700} type="jpg" className="w-full" />
      <div className="text-title mt-3">{text ? text : "Lorem Ipsum"}</div>
      <div className="text-price">${price}</div>
    </div>
  );
}
