import Image from "next/image";
import HeroImg from "@/public/assets/Hero_Image.png";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      <Image src={HeroImg} alt="HeroImg" />
      <div className="bg-gradient-to-r from-dark-color to-analogous-color-2 px-5 py-6">
        <h1 className="font-bold lg:text-5xl text-4xl leading-9 text-white mb-5">
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>
        <Button label="Get free consultation" />
      </div>
    </main>
  );
}
