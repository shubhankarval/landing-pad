import Image from "next/image";
import Link from "next/link";
import Icon from "@analytics/Icon";
import Img from "@analytics/Image";
import Button from "@analytics/Button";
import Features from "@analytics/Features";
import Info from "@analytics/Info";
import Prices from "@analytics/Prices";

// min-h-screen bg-analytics-top bg-cover bg-fixed bg-center bg-no-repeat

export default function Analytics() {
  return (
    <div className="pb-20 pt-10">
      <Image
        src="/analytics/background-top.svg"
        alt=""
        height={0}
        width={0}
        className="absolute top-0 z-[-1] w-screen"
      />
      <Image
        src="/analytics/background-bottom.svg"
        alt=""
        height={0}
        width={0}
        className="absolute bottom-0 z-[-1] w-screen"
      />
      <main className="font-regular px-40 text-white">
        <header className="mb-40 flex items-center justify-between">
          <Link href="/">
            <Icon iconType="logo" iconNumber={1} className="w-40" />
          </Link>
          <nav className="flex gap-5">
            <Link href="">Products</Link>
            <Link href="">Pricing</Link>
            <Link href="">FAQ</Link>
            <Link href="">Blog</Link>
          </nav>
          <div className="flex items-center gap-7">
            <Link href="">Sign In</Link>
            <Link href="">
              <Button text="Sign Up" buttonType={2} className="px-12 py-1.5" />
            </Link>
          </div>
        </header>
        <section className="">
          <div className="max-w-lg">
            <h1 className="text-5xl">
              Monitor your business on real-time dashboard
            </h1>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
              vitae nibh nunc mattis imperdiet sed nullam.
            </p>
            <Button
              text="Try for free"
              buttonType={1}
              className="mt-14 px-16 py-3"
            />
          </div>
          <Img imgName="hero" className="absolute right-0 top-32 w-1/2" />
        </section>
        <section className="mt-72 text-[#172755]">
          <div className="flex flex-col items-center text-center">
            <h2>Main Features</h2>
            <p className="mb-16 mt-10 max-w-6xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
              vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
              pulvinar risus pulvinar sit amet. Id vel in nam malesuada.
            </p>
            <Features />
          </div>
          <div className="mt-28 grid grid-cols-2 gap-y-10">
            <Info heading="Automated Reports & Widget Alerts" />
            <Img imgName="screen-01" className="w-full" />
            <Img imgName="screen-02" className="w-full" />
            <Info
              heading="Fully customizable to address your needs"
              className="ml-28"
            />
            <Info heading="Pre-built Dashboard Templates" />
            <Img imgName="screen-03" className="w-full" />
          </div>
        </section>
        <section className="mt-80 flex flex-col items-center text-center">
          <h2>Pricing Plans</h2>
          <p className="max-w-10xl mb-16 mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est.
          </p>
          <Prices />
        </section>
        <footer className="mt-28">
          <Image
            src={`/analytics/splitter-2.svg`}
            alt=""
            height={0}
            width={0}
            className="my-8 w-full"
          />
          <div className="flex items-center justify-between">
            <Link href="/">
              <Icon iconType="logo" iconNumber={2} className="w-28" />
            </Link>
            <nav className="flex gap-5">
              <Link href="">Products</Link>
              <Link href="">Pricing</Link>
              <Link href="">FAQ</Link>
              <Link href="">Blog</Link>
            </nav>
            <div className="flex items-center gap-7">
              <Link href="">
                <Icon iconType="social" iconNumber={1} className="w-2.5" />
              </Link>
              <Link href="">
                <Icon iconType="social" iconNumber={2} className="w-5" />
              </Link>
              <Link href="">
                <Icon iconType="social" iconNumber={3} className="w-5" />
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
