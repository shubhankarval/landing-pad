import Link from "next/link";
import Image from "@components/Image";
import Imagex from "next/image";
import Button from "@fashion/Button";
import Featured from "@fashion/Featured";
import Stats from "@fashion/Stats";
import BestSellers from "@fashion/BestSellers";
import Nav from '@fashion/Nav';

export default function FashionPage() {
  const imgUrl = "/fashion/";
  const deals = [
    { number: 3, time: "Day" },
    { number: 6, time: "Minute" },
    { number: 9, time: "Hour" },
  ];

  return (
    <main className="text-navy-blue selection:bg-navy-blue selection:text-white">
      <header className="flex items-center justify-between bg-pale-blue pr-0">
        <Link href="/fashion" className="text-lg font-black">
          FASHION
        </Link>
        <nav className="mr-10 flex gap-10">
          <Link href="" className="font-bold">
            MEN
          </Link>
          <Link href="" className="font-bold">
            WOMEN
          </Link>
          <Link href="" className="font-bold">
            KIDS
          </Link>
          <Link href="" className="font-bold">
            COLLECTION
          </Link>
          <Link href="" className="font-bold">
            TRENDS
          </Link>
        </nav>
        <div className="flex gap-5">
          <button className="p-6">
            <Image src={imgUrl + "search-icon"} className="w-5" />
          </button>
          <button className="bg-navy-blue p-6">
            <Image src={imgUrl + "bag-icon"} className="w-5" />
          </button>
        </div>
      </header>
      <section className="relative flex items-center justify-between bg-pale-blue py-24">
        <Image
          src={imgUrl + "vector-1"}
          className="absolute left-0 top-20 w-20"
        />
        <div className="max-w-lg ">
          <h1 className="text-7xl leading-tight">
            Make Your Style Looks Perfect
          </h1>
          <p className="mb-9 mt-3 text-xl">
            Our collection will help your fashion looks better and we will
            provide the best product for you.
          </p>
          <Button text="SHOP NOW" />
        </div>
        <div className="relative">
          <Image
            src={imgUrl + "vector-2"}
            className="absolute -left-12 -top-5 w-28"
          />
          <Image src={imgUrl + "hero"} type="png" width={450} />
          <button className="absolute -bottom-5 -right-12 flex h-28 w-28 items-center justify-center bg-navy-blue">
            <Image src={imgUrl + "arrow-down"} width={20} />
          </button>
        </div>
      </section>
      <section className="py-36">
        <h2 className="text-center">Our Featured Collections</h2>
        <Featured imgUrl={imgUrl} />
      </section>
      <section className="flex items-center gap-40 bg-pale-blue pb-40 pt-28">
        <div className="relative flex flex-col items-center">
          <Image
            src={imgUrl + "vector-3"}
            className="absolute -left-11 -top-9 w-32"
          />
          <Image src={imgUrl + "explore"} width={500} type="jpg" />
          <Button
            text="EXPLORE NOW"
            className="-mt-20 bg-white text-navy-blue"
          />
        </div>
        <div>
          <h2 className="max-w-md">Best Fashion Brand</h2>
          <p className="mb-16 mt-10 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper congue eros, eget tincidunt ipsum eleifend ut orem ipsum
            dolor sit amet consectetur adipiscing elit Sed ullamcorper congue
            eros eleifend ut tincidunt ipsum .
          </p>
          <Stats />
        </div>
      </section>
      <section className="flex flex-col items-center pb-32 pt-36">
        <h2>Our Best Sellers</h2>
        <BestSellers />
      </section>
      <section className="flex items-center justify-between bg-pale-blue py-20">
        <div>
          <h3>Deal Of The Day</h3>
          <p className="mb-10 mt-5 max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem
          </p>
          <div className="flex gap-5">
            {deals.map((item, index) => (
              <div className="mb-14 flex h-24 w-24 flex-col items-center justify-center gap-1 bg-navy-blue text-white">
                <span className="font-play text-2xl">0{item.number}</span>
                <span>{item.time}</span>
              </div>
            ))}
          </div>
          <Button text="SHOP NOW" />
        </div>
        <div className="relative">
          <Image
            src={imgUrl + "vector-4"}
            className="absolute -right-10 -top-3 w-28"
          />
          <Image
            src={imgUrl + "vector-4"}
            className="absolute -bottom-7 -left-24 w-28"
          />
          <Image
            src={imgUrl + "deal"}
            type="jpg"
            width={500}
            className="w-full"
          />
        </div>
      </section>
      <footer className="bg-midnight-blue pb-7 pt-24 text-[#b4bac6]">
        <div className="flex justify-between px-32 ">
          <div className="w-full">
            <Link href="/fashion" className="font-bold text-white text-xl">FASHION</Link>
            <p className="text-base max-w-48 mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
          </div>
          <Nav heading="Company" items={['About Us', 'Career', 'Blog', 'FAQs']}/>
          <Nav heading="Need Help?" items={['Contact Us', 'Shipping Services', 'Payment Options', 'Returns & Exchanges', 'Unsubscribe']}/>
          <Nav heading="Follow us" items={['Instagram', 'Facebook', 'Twitter', 'Snapchat', 'Pinterest']}/>
        </div>
        <div className="mb-7 mt-32 h-[1px] w-full bg-[#b4bac6]"></div>
        <div className="text-base text-center">
          Copyright @ Shubhankar Valimbe 2024. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
