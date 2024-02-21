import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Vector from "./Vector";

const socials = [];

for (let i = 1; i <= 6; i++) {
  socials.push(
    <Link href="" key={i}>
      <Image
        src={`/hydra/social-icon-${i}.svg`}
        alt=""
        height={30}
        width={30}
      />
    </Link>,
  );
}

const navStyles = "flex flex-col mx-auto gap-3";

const footerData = [
  <Link href="/">
    <Image src="/hydra/logo.svg" alt="" height={200} width={200} />
  </Link>,
  <nav className={navStyles}>
    <Link href="#about">ABOUT</Link>
    <Link href="#services">SERVICES</Link>
    <Link href="#technologies">TECHNOLOGIES</Link>
    <Link href="#howto">HOW TO</Link>
    <Link href="#contact">JOIN HYDRA</Link>
  </nav>,
  <nav className={navStyles}>
    <Link href="">FAQ</Link>
    <Link href="">SITEMAP</Link>
    <Link href="">CONDITIONS</Link>
    <Link href="">LICENSES</Link>
  </nav>,
  <div className="mx-auto">
    <span>SOCIALIZE WITH HYDRA</span>
    <div className="mb-6 mt-4 flex gap-4">{socials}</div>
    <Button text="BUILD YOUR WORLD" />
  </div>,
];

const divider = (
  <Image
    src="/hydra/divider.svg"
    alt=""
    height={0}
    width={0}
    className="w-1"
  />
);

export default function Footer() {
  return (
    <footer className="relative">
      <Vector vectorNumber={9} className="-top-2/3" />
      <Vector vectorNumber={10} className="bottom-1" />
      <div className="mb-5 flex flex-col items-center gap-14">
        <div className="grid w-full grid-cols-4">
          {footerData.map((item, index) => (
            <div
              className="flex items-center justify-between"
              key={index}
            >
              {item}
              {index <= 2 && divider}
            </div>
          ))}
        </div>
        <Image
          src="/hydra/horizontal-dash.svg"
          alt=""
          width={0}
          height={0}
          className="w-full"
        />
        <small>
          2024 © HYDRA LANDING PAGE  -  DEVELOPED BY SHUBHANKAR VALIMBE - ALL
          RIGHTS RESERVED
        </small>
      </div>
    </footer>
  );
}
