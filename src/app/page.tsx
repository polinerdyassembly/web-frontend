import Image from "next/image";

import NavBar from "@/components/NavBar/NavBar";
import BgHome from "@/public/bg-home.svg";
import Decor1 from "@/public/decorator-homepage-1.png";
import Decor2 from "@/public/decorator-homepage-2.png";
import Decor3 from "@/public/decorator-homepage-3.png";

export default function Home() {
  return (
    <div className="static flex min-h-screen w-screen flex-col">
      <header>
        <NavBar />
      </header>

      <BgHome
        viewBox="0 0 1086 982"
        className="absolute inset-y-0 left-0 -z-10 h-full w-auto"
      />

      <main className="flex w-full grow justify-center">
        <section className="relative w-full max-w-screen-lg">
          <div className="absolute inset-x-0 bottom-8 grid grid-cols-[1.15fr_1fr_0.96fr] items-end gap-4">
            <Image
              src={Decor1.src}
              alt=""
              width={404}
              height={309}
              className="w-full"
            />
            <Image
              src={Decor2.src}
              alt=""
              width={351}
              height={282}
              className="w-full"
            />
            <Image
              src={Decor3.src}
              alt=""
              width={516}
              height={751}
              className="w-full"
            />
          </div>

          <h1>
            <strong className="text-9xl">POLINERDY</strong>
            <br />
            <span className="text-[7.5rem] font-extralight leading-[7.5rem]">
              ASSEMBLY
            </span>
            <br />
            <span className="text-6xl font-extralight">Welcome</span>
          </h1>
        </section>
      </main>
    </div>
  );
}
