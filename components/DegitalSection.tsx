import Image from "next/image";
import SearchImg from "@/public/assets/image1.svg";
import Button from "./Button";

const DegitalSection = () => {
  return (
    <section className="flex flex-col justify-center items-center px-5">
      <Image src={SearchImg} alt="SearchImg" />
      <div>
        <h2 className="text-primary-color text-xl font-semibold text-center mb-6">
          Digital Strategy
          <span className="block text-center">Consulting</span>
        </h2>
        <p className="text-center">
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>
        <div className="text-center mt-6">
          <Button label="learn more" />
        </div>
      </div>
    </section>
  );
};

export default DegitalSection;
