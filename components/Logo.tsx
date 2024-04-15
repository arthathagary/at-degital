import LogoImg from "@/public/assets/Logo.svg";

import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src={LogoImg} alt="Logo" />
    </div>
  );
};

export default Logo;
