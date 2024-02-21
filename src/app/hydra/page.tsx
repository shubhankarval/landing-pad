import Image from "next/image";
import Link from "next/link";
import Vector from "@hydra/Vector";
import Button from "@hydra/Button";
import Info from "@hydra/Info";
import Heading from "@hydra/Heading";
import Cards from "@hydra/Cards";
import Processes from "@hydra/Processes";
import Contact from "@hydra/Contact";
import Footer from "@hydra/Footer";

export default function HydraSite() {
  const getTechIcons = () => {
    let techIcons = [];
    for (let i = 1; i <= 4; i++) {
      techIcons.push(
        <Image
          src={`/hydra/tech-icon-${i}.svg`}
          alt=""
          height={200}
          width={200}
          key={i}
        />,
      );
    }
    return techIcons;
  };

  return (
    <div className="relative -z-10 h-full w-full bg-[#302C42] px-16 py-8 font-bold text-white">
      <header className="relative z-20 grid grid-cols-3">
        <Link className="flex items-center gap-3" href="/">
          <Image
            src="/hydra/logo.svg"
            alt=""
            width={90}
            height={90}
          />
          <Image
            src="/hydra/heading.svg"
            alt=""
            width={70}
            height={70}
          />
        </Link>
        <nav className="flex items-center justify-center gap-8 text-xs">
          <Link href="#about">ABOUT</Link>
          <Link href="#services">SERVICES</Link>
          <Link href="#technologies">TECHNOLOGIES</Link>
          <Link href="#howto">HOW TO</Link>
        </nav>
        <div className="flex items-center justify-end gap-7">
          <Link href="#contact">
            <Button
              text="CONTACT US"
              className="border-2 border-white bg-none text-white"
            />
          </Link>
          <Button text="JOIN HYDRA" />
        </div>
      </header>
      <section>
        <Vector vectorNumber={1} className="-top-1/4 right-0" />
        <Vector vectorNumber={2} className="-top-1/2 right-24" />
        <Vector vectorNumber={3} className="-right-16 top-1/3" />
        <Vector vectorNumber={4} className="-left-16 -top-0" />
        <main className="flex justify-between">
          <div className="flex flex-col gap-14">
            <h1 className="max-w-xl text-5xl leading-tight">
              <span className="bg-gradient-colors bg-gradient-to-l bg-clip-text text-transparent">
                Dive
              </span>{" "}
              Into The Depths Of{" "}
              <span className="bg-gradient-colors bg-gradient-to-r bg-clip-text text-transparent">
                Virtual Reality
              </span>
            </h1>
            <p className="max-w-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Dolore excepturi maiores totam rem nihil voluptas
              quis dicta provident magni aperiam repudiandae, nesciunt
              eum fugiat distinctio officiis. Velit omnis vero
              commodi!
            </p>
            <div className="flex items-center gap-10">
              <Button text="BUILD YOUR WORLD" />
              <Image
                src="/hydra/arrow.svg"
                alt=""
                height={35}
                width={35}
              />
            </div>
          </div>
          <div className="relative">
            <Image
              src="/hydra/hero-bg.svg"
              alt=""
              width={0}
              height={0}
              className="w-full"
            />
            <Image
              src="/hydra/hero-image.svg"
              alt=""
              width={480}
              height={450}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            />
          </div>
        </main>
      </section>
      <Info />
      <section id="about">
        <Vector vectorNumber={5} className="-left-10 top-1/4" />
        <Vector vectorNumber={6} className="-left-20 bottom-8" />
        <div className="grid grid-cols-2 gap-y-20">
          <Heading
            iconExists={true}
            text1="INTRODUCTION"
            text2="TO HYDRA VR"
          />
          <p>
            Vitae sapien pellentesque habitant morbi tristique
            senectus et netus et. Feugiat nibh sed pulvinar proin
            gravida hendrerit lectus. Mi sit amet mauris commodo quis
            imperdiet massa tincidunt nunc. Viverra aliquet eget sit
            amet tellus. Ornare lectus sit amet est placerat in.
            Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>

          <Image
            src="/hydra/about-image.svg"
            alt=""
            height={450}
            width={450}
          />
          <div className="flex flex-col gap-8">
            <Heading
              iconExists={false}
              text1="ABOUT"
              text2="HYDRA VR"
            />
            <p className="mb-2">
              Eget mi proin sed libero enim sed faucibus turpis. Nisl
              rhoncus mattis rhoncus urna neque viverra justo. Vivamus
              at augue eget arcu dictum. Ultrices gravida dictum fusce
              ut placerat orci. Aenean et tortor at risus viverra
              adipiscing at in. Mattis aliquam faucibus purus in
              massa. Est placerat in egestas erat imperdiet sed.
              Consequat semper viverra nam libero justo laoreet sit
              amet. Aliquam etiam erat velit scelerisque in dictum non
              consectetur a. Laoreet sit amet cursus sit amet. Vel
              eros donec ac odio tempor orci dapibus. Sem nulla pha
              retra diam sit amet nisl suscipit adipiscing bibendum.
              Leo a diam sollicitudi n tempor.
            </p>
            <Button text="LET'S GET IN TOUCH" />
          </div>
        </div>
      </section>
      <section id="services">
        <Vector vectorNumber={7} className="top-1/2 -right-16" />
        <div className="mb-16 grid grid-cols-2">
          <Heading
            iconExists={true}
            text1="WHY BUILD"
            text2="WITH HYDRA?"
          />
          <p>
            Vitae sapien pellentesque habitant morbi tristique
            senectus et netus et. Feugiat nibh sed pulvinar proin
            gravida hendrerit lectus. Mi sit amet mauris commodo quis
            imperdiet massa tincidunt nunc. Viverra aliquet eget sit
            amet tellus. Ornare lectus sit amet est placerat in.
            Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
        <Cards />
      </section>
      <section id="technologies">
        <div className="flex h-80 items-center justify-center rounded-full bg-tech bg-cover bg-no-repeat">
          <Heading
            iconExists={false}
            text1="TECHNOLOGIES & HARDWARE"
            text2="USED BY HYDRA VR."
            className="text-center"
          />
        </div>
        <div className="mt-20 flex justify-around">
          {getTechIcons()}
        </div>
      </section>
      <section id="howto">
      <Vector vectorNumber={8} className="bottom-1/4" />
        <div className="mb-28 grid grid-cols-2">
          <Heading
            iconExists={true}
            text1="HOW WE BUILD"
            text2="WITH HYDRA VR?"
          />
          <p>
            Vitae sapien pellentesque habitant morbi tristique
            senectus et netus et. Feugiat nibh sed pulvinar proin
            gravida hendrerit lectus. Mi sit amet mauris commodo quis
            imperdiet massa tincidunt nunc. Viverra aliquet eget sit
            amet tellus. Ornare lectus sit amet est placerat in.
            Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
        <Processes />
      </section>
      <Contact />
      <Footer />
    </div>
  );
}
