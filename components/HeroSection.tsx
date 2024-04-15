import Image from "next/image";
import HeroImg from "@/public/assets/Hero_Image.png";
import HeroImgDesktop from "@/public/assets/hero_img_desktop.png";

import Button from "@/components/ui/Button";

const HeroSection = () => {
  return (
    <section className="lg:relative lg:h-[700px]">
      <div>
        <Image src={HeroImgDesktop} alt="HeroImg" className="lg:h-[700px]" />
      </div>
      <div className="bg-gradient-to-r from-dark-color to-analogous-color-2 px-5 py-6 lg:absolute bottom-14 left-12 lg:w-[622px]">
        <h1 className="font-bold lg:text-5xl text-4xl leading-9 text-white mb-5 text-pretty">
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>
        <Button label="Get free consultation" />
      </div>
    </section>
  );
};

export default HeroSection;
