"use client";

import Image from "next/image";
import FacebookIcon from "../icons/facebookIcon";
import InstagramIcon from "../icons/instagramIcon";
import YoutubeIcon from "../icons/youtubeIcon";
import LinkedinIcon from "../icons/linkedinIcon";
import PhoneIcon from "../icons/phoneIcon";
import LocationOutline from "../icons/locationIcon";
import { useState } from "react";
import BtnElement from "../BtnElement/BtnElement";

const Footer = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  return (
    <footer className="">
      {/* <div className="bg-[url(/assets/images/footer-bg1.png)] bg-black bg-no-repeat bg-cover bg-left w-full"> */}
      <div className="w-full bg-no-repeat bg-size-[200%_100%] bg-position-[left_center] md:bg-cover md:bg-left bg-[url(/assets/images/footer-bg1.png)]">
        <div className="bg-linear-to-tl md:bg-linear-to-r from-red-600/80 to-black/80 w-full bg-cover bg-left bg-no-repeat flex justify-center px-10 md:px-20">
          <div className="flex flex-col md:flex-row items-center md:max-w-6xl w-full py-8 justify-between gap-5">
            <div className="w-full">
              <p className="text-white font-noodle text-5xl">CLUB 8 REWARDS</p>
              <p className="text-white text-[18px] pt-0.5 m-0">
                GET FRESH NEWS EVERY MONTH!
              </p>
            </div>
            <div className="w-full">
              <form
                className="flex flex-col md:flex-row gap-7 md:gap-10 z-50 items-center justify-between"
                action={"#"}
              >
                <div className="md:flex-7 w-full">
                  <div className="flex flex-col w-full items-center">
                    <input
                      className="bg-white/20 block w-full text-white outline-none nunito mb-2.5 px-2 py-1 border-ra"
                      value={data.name}
                      onChange={(e) => {
                        setData({ ...data, name: e.target.value });
                      }}
                      placeholder="Your Name"
                    />

                    <input
                      className="bg-white/20 w-full text-white outline-none px-2 nunito py-1"
                      value={data.email}
                      onChange={(e) => {
                        setData({ ...data, email: e.target.value });
                      }}
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <BtnElement
                  className="w-[340px] md:w-full md:flex-4"
                  color="red"
                  name="subscribe"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="nunito bg-[url(/assets/images/footer-bg2.png)] bg-black bg-no-repeat bg-cover pb-10">
        <div className="bg-[url(/assets/images/footer_bg2_gradient.png)] w-full bg-cover h-[267px] md:hidden bg-no-repeat"></div>
        <div className="px-10 md:px-12 md:pt-50 lg:px-0 lg:max-w-4xl xl:max-w-6xl lg:mx-auto">
          <div className="-mt-[150px] md:mt-0">
            <div className="flex items-center">
              <PhoneIcon />
              <p className="text-white pl-2 text-[10px] font-bold">
                408 244 3333
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-7 md:items-center justify-between mt-5">
              <div className="flex-10/12">
                <div className="flex">
                  <LocationOutline />
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
                    src={"/Group.svg"}
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
            <div className="block md:hidden">
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
              <div className="mt-5 text-white text-[9px]">
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
      </div>
    </footer>
  );
};

export default Footer;
