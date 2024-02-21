import Image from "next/image";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

export default function Contact() {
  const inputStyles =
    "rounded-full border-2 bg-transparent px-8 py-5 font-normal placeholder:font-light placeholder:text-white text-sm";

  return (
    <section
      className="flex flex-col items-center rounded-[100px] bg-gradient-radial from-[#403A5F] to-[#211E2E] px-44 pb-20 pt-14"
      id="contact"
    >
      <div className="flex flex-col items-center gap-7">
        <h2>JOIN HYDRA</h2>
        <Image
          src="/hydra/faded-dash.svg"
          alt=""
          height={300}
          width={300}
        />
        <h2 className="font-light">Let’s Build Your VR Experience</h2>
      </div>
      <div className="mb-10 mt-14 grid w-full grid-cols-2 gap-4 gap-y-8">
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          className={inputStyles}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          className={inputStyles}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={inputStyles}
        />

        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          className={inputStyles}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className={twMerge(inputStyles, "col-span-2")}
        />
        <textarea
          name="message"
          placeholder="Tell Us Something..."
          rows={5}
          className={twMerge(inputStyles, "col-span-2 rounded-3xl")}
        ></textarea>
      </div>
      <Button text="SEND TO HYDRA" />
    </section>
  );
}
