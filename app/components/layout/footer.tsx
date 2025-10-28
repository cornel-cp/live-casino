"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import FacebookIcon from "../icons/facebookIcon";
import InstagramIcon from "../icons/instagramIcon";
import YoutubeIcon from "../icons/youtubeIcon";
import LinkedinIcon from "../icons/linkedinIcon";

const Footer = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  return (
    <footer className=" mt-5">
      <div className="bg-[url(/assets/images/footer-bg1.png)] bg-black bg-no-repeat bg-cover bg-left w-full ">
        <div className="bg-linear-to-r from-red-800/50 to-black/50 w-full bg-cover bg-no-repeat flex justify-center px-8 md:px-20">
          <div className="flex flex-col md:flex-row items-center max-w-6xl w-full py-8 justify-between gap-5 px-4">
            <div className="w-sm md:w-auto">
              <p className="text-white font-noodle text-5xl">CLUB 8 REWARDS</p>
              <p className="text-white text-[12px] md:text-[18px] pt-0.5 m-0">GET FRESH NEWS EVERY MONTH!</p>
            </div>
            <div className="w-sm md:w-auto">
              <form className="flex flex-col md:flex-row gap-7 md:gap-10 z-50 items-center justify-around" action={"#"}>
                <div className="flex flex-col w-full items-center">
                  <input className="bg-white/20 block w-full max-w-sm md:w-auto min-w-[207px] text-white outline-none nunito mb-2.5 px-2 py-1 border-ra" value={data.name} onChange={(e) => {
                    setData({ ...data, name: e.target.value })
                  }} placeholder="Your Name" />

                  <input className="bg-white/20 w-full max-w-sm md:w-auto min-w-[207px] text-white outline-none px-2 nunito py-1" value={data.email} onChange={(e) => {
                    setData({ ...data, email: e.target.value })
                  }} placeholder="Your Email" />
                </div>
                <button className="w-full max-w-sm md:w-[103px]  px-8 py-2.5 bg-red-800 -skew-x-16" type="submit"><p className="skew-x-16 text-white"> Subscribe</p></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(/assets/images/footer-bg2.png)] bg-black bg-no-repeat bg-cover bg-center flex flex-col justify-top w-full h-auto">
        <div className="bg-[url(/assets/images/footer_bg2_gradient.png)] w-full bg-cover"></div>
        <div className="px-8 md:px-16">
          <div className="flex items-center">
            <Image
              src={"/assets/images/footer_mobile.png"}
              alt="mobile"
              width={24}
              height={24}
            />
            <p className="text-white pl-2 text-[10px] font-bold">
              408 244 3333
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-7 md:items-center justify-between mt-5">
            <div className="flex-10/12">
              <div className="flex">
                <Image
                  src={"/assets/images/footer_location.png"}
                  alt="location"
                  width={24}
                  height={24}
                />
                <div className="text-white pl-2 text-[12px] ">
                  <p className="font-bold">
                    1887 Matrix Boulevard San Jose, Ca 95110
                  </p>
                  <p className="font-normal">
                    We are just off Highway 101 by the San Jose International
                    Airport.
                  </p>
                </div>
              </div>
            </div>
            <button className="flex-2/12 w-full md:w-full border-2 border-white -skew-x-16 text-white p-2 cursor-pointer">
              <p className="skew-x-16 noodle">Private Policy</p>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center justify-between mt-5">
              <div className="flex text-white text-[9px]">
                <Image
                  src={"/assets/images/footer-logo.png"}
                  alt="location"
                  width={120}
                  height={32}
                />
                <div className="pl-2.5 text-[9px]">
                  <p>© 2022 CASINO M8TRIX. All Rights Reserved</p>
                  <p>
                    21+ Please gamble responsibly | 1-800-GAMBLER |
                    www.problemgambling.ca.gov
                  </p>
                  <p>
                    This site is protected by reCAPTCHA and the Google Privacy
                    Policy and Terms of Service apply.
                  </p>
                </div>
              </div>
              <div className="flex gap-7">
                <FacebookIcon />
                <InstagramIcon />
                <YoutubeIcon />
                <LinkedinIcon />
              </div>
            </div>
          </div>
          <div className="block md:hidden mb-7">
            <div className="flex items-center justify-between mt-5">
              <div className="flex text-white text-[9px]">
                <Image
                  src={"/assets/images/footer-logo.png"}
                  alt="location"
                  width={120}
                  height={32}
                />
              </div>
              <div className="flex gap-7">
                <FacebookIcon />
                <InstagramIcon />
                <YoutubeIcon />
                <LinkedinIcon />
              </div>
            </div>
            <div className="mt-5 text-white">
              <p>© 2022 CASINO M8TRIX. All Rights Reserved</p>
              <p>
                21+ Please gamble responsibly | 1-800-GAMBLER |
                www.problemgambling.ca.gov
              </p>
              <p>
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
