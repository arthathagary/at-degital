import Image from "next/image";
import SearchImg from "@/public/assets/image1.svg";
import Button from "./ui/Button";

const DegitalSection = () => {
  return (
    <section className="px-5 md:mt-16 w-full flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-center md:max-w-[896px]">
        <Image src={SearchImg} alt="SearchImg" className="md:order-2" />
        <div>
          <h2 className="text-primary-color text-xl font-semibold text-center md:text-left mb-6  md:text-[27px]">
            Digital Strategy
            <span className="block text-center md:text-left  md:text-[27px]">
              Consulting
            </span>
          </h2>
          <p className="text-center md:text-left">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <div className="text-center mt-6 md:text-left">
            <Button label="learn more" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DegitalSection;
