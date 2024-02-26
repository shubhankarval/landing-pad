"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@finance/Button";
import CompanyLogos from "@finance/Logos";
import Card from "@finance/Card";
import Stats from "@finance/Stats";
import Services from "@finance/Services";
import Footer from "@finance/Footer";
import Testimonials from "@finance/Testimonials";

export default function FinancePage() {
  return (
    <main className="selection:bg-[#CBFC01] selection:text-[#151515] relative -z-10 bg-[#151515] py-12 text-white">
      <section className="m-0">
        <Image
          src="/finance/grid.svg"
          alt=""
          width={0}
          height={0}
          className="absolute left-0 top-0 z-[-1] w-full"
        />
        <header className="flex items-center justify-between">
          <Link
            href="/finance"
            className="font-sato text-xl font-bold text-white"
          >
            FinanceX
          </Link>
          <nav className="flex gap-5">
            <Link href="">Why FinanceX</Link>
            <Link href="">Features</Link>
            <Link href="">Update</Link>
            <Link href="">Blog</Link>
          </nav>
          <button className="flex items-center gap-2 border-none font-sato font-medium">
            Sign Up
            <Image
              src="/finance/arrow-icon.svg"
              alt=""
              height={15}
              width={15}
            />
          </button>
        </header>
        <div className="mt-20 max-w-lg">
          <h3>Welcome! Future Platform</h3>
          <h1 className="font-sato text-7xl font-black leading-snug">
            The World&apos;s Most Modern Card{" "}
            <span className="text-[#CBFC01]">Platform</span>
          </h1>
          <p className="mb-3 mt-6 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
          <Button />
        </div>
        <Image
          src="/finance/hero.svg"
          alt=""
          height={0}
          width={0}
          className="absolute right-0 top-40 w-5/12"
        />
      </section>
      <CompanyLogos />
      <section>
        <div className="flex justify-between">
          <div>
            <h3>Our Servcies</h3>
            <h2 className="leading-snug">Browse our</h2>
            <h2>
              services & <span className="text-[#CBFC01]">offerings</span>
            </h2>
            <Button />
          </div>
          <div className="flex">
            <Card bg1="bg-[#2e2e2e]" bg2="bg-[#CBFC01]" />
            <Card />
          </div>
        </div>
        <div className="flex justify-end">
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <section className="flex items-center justify-between">
        <div className="max-w-md">
          <h3>Benefits</h3>
          <h2>
            We have many users all over the{" "}
            <span className="text-[#CBFC01]">world</span>
          </h2>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna
          </p>
          <Stats />
        </div>
        <Image
          src="/finance/world-map.svg"
          alt=""
          width={0}
          height={0}
          className="w-1/2"
        />
      </section>

      <section className="flex items-center justify-between">
        <div className="max-w-md">
          <h3>Our Services</h3>
          <h2>
            Real Time <span className="text-[#CBFC01]">Transaction Report</span>
          </h2>
          <p className="mb-20 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna
          </p>
          <Button />
        </div>
        <Image
          src="/finance/visa-card.svg"
          alt=""
          width={0}
          height={0}
          className="w-1/2"
        />
      </section>
      <section className="flex justify-center">
        <Services />
      </section>
      <Testimonials />
      <section className="selection:bg-[#151515] selection:text-[#CBFC01] mx-28 flex flex-col items-center justify-center gap-10 bg-[#cbfc01] px-0 py-16 text-center">
        <h2 className="max-w-4xl text-7xl leading-tight text-[#151515]">
          Let&apos;s grow our business, together.
        </h2>
        <button className="bg-[#151515] px-10 py-3 font-sato font-bold text-[#cbfc01]">
          Get Started
        </button>
      </section>
      <Footer />
    </main>
  );
}
