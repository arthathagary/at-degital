import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-primary-color text-white py-6 px-5">
      <div className="mb-6">
        <Logo />
      </div>
      <p className="mb-8">
        Your goal is our target. Not anything in between. We use online
        marketing platforms and tools to achieve single objective - your
        business results.
      </p>

      <div className="mb-8">
        <h3 className="text-[21px] font-semibold">Our Technologies</h3>
        <ul>
          <li>ReactJs</li>
          <li>Gatsby</li>
          <li>NextJs</li>
          <li>Express.js</li>
          <li>NodeJs</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-[21px] font-semibold">Our Services</h3>
        <ul>
          <li>Social media Marketing</li>
          <li>Web & Mobile App Development</li>
          <li>Data & Analytics</li>
        </ul>
      </div>

      <hr className="mb-2" />
      <div className="flex justify-center gap-4">
        <p>Privacy Policy</p>
        <p>|</p>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
