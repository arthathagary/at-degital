import Image from "next/image";
import ComputerImg from "@/public/assets/image2.svg";
import Button from "./ui/Button";

const DevelopmentSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center px-5 md:mt-16">
      <Image src={ComputerImg} alt="DevelopmentImg" />
      <div>
        <h2 className="text-primary-color text-xl md:text-[27px] font-semibold text-center md:text-left mb-6">
          Web & Mobile App{" "}
          <span className="block text-center md:text-left">Development</span>
        </h2>
        <p className="text-center md:text-left text-base">
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </p>
        <div className="text-center md:text-left mt-6">
          <Button label="learn more" />
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSection;
