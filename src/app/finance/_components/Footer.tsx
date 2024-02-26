import Link from "next/link";
import Image from "next/image";

const socialIcons = ["linkedin", "messenger", "twitter", "twoo"];

export default function Footer() {
  return (
    <footer>
      <Image
        src="/finance/grid-3.svg"
        alt=""
        width={0}
        height={0}
        className="absolute bottom-0 left-0 z-[-1] w-full"
      />
      <div className="flex justify-between">
        <div>
          <Link href="">
            <h6 className="text-white">FinanceX</h6>
          </Link>
          <p className="mb-10 mt-5 max-w-60">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <div className="flex gap-5">
            {socialIcons.map((social, index) => (
              <Link href="" key={index}>
                <Image
                  src={`/finance/${social}-icon.svg`}
                  alt=""
                  height={0}
                  width={0}
                  className="w-6"
                />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h6>Company</h6>
          <nav className="mt-5 flex flex-col gap-5">
            <Link href="">About Us</Link>
            <Link href="">Careers</Link>
            <Link href="">Blogs</Link>
            <Link href="">Pricing</Link>
          </nav>
        </div>
        <div>
          <h6>Resources</h6>
          <nav className="mt-5 flex flex-col gap-3">
            <Link href="">Templates</Link>
            <Link href="">Tutorials</Link>
            <Link href="">Free Resources</Link>
            <Link href="">Contract Templates</Link>
          </nav>
        </div>
        <div>
          <h6>Join Our Newsletter</h6>
          <div className="my-5">
            <input
              type="email"
              className="bg-[#b9b9b9] p-3 text-[#383838] placeholder:text-[#383838]"
              placeholder="Your email address"
            />
            <button
              type="submit"
              className="bg-[#cbfc01] p-3 font-sato font-bold text-[#151515]"
            >
              Subscribe
            </button>
          </div>
          <p className="max-w-sm text-[#595959]">
            * Will send you weekly updates for your better finance management.
          </p>
        </div>
      </div>
      <div className="mb-8 mt-16 border border-[#b9b9b9]"></div>
      <div className="text-center text-[#b9b9b9]">
        <small className="font-sato text-sm font-medium">
          Developed by Shubhankar Valimbe 2024. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
}
