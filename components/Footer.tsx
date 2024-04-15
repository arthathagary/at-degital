import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-primary-color text-white py-6 px-5 md:px-10">
      <div className="lg:flex lg:justify-center">
        <div className="lg:w-2/5 lg:flex lg:flex-col lg:items-center">
          <div className="mb-6 self-start">
            <Logo />
          </div>
          <p className="mb-8 md:w-3/5 lg:w-full">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="flex flex-col lg:justify-end md:flex-row md:gap-[79px] lg:w-3/5 ">
          <div className="mb-8">
            <h3 className="text-[21px] font-semibold mb-2">Our Technologies</h3>
            <ul className="space-y-1">
              <li>ReactJs</li>
              <li>Gatsby</li>
              <li>NextJs</li>
              <li>Express.js</li>
              <li>NodeJs</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-[21px] font-semibold mb-2">Our Services</h3>
            <ul className="space-y-1">
              <li>Social media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-2 w-full flex justify-center">
        <hr className="w-full md:w-11/12 lg:w-3/5" />
      </div>
      <div className="flex justify-center gap-4">
        <p>Privacy Policy</p>
        <p>|</p>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
