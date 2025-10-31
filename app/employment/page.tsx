"use client";

import Image from "next/image";
import Layout from "../components/layout/layout";
import Molicule from "../components/icons/molicule";
import BtnElement from "../components/BtnElement/BtnElement";
import JobPost from "../components/employment/jobPost";
import DraggableContainer from "../components/Animations/motion";
import { useState } from "react";
import Modal from "../components/Modal/modal";
import Link from "next/link";

const Employment = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-background">
      <Layout>
        <div className="ml-10 md:ml-0">
          <p className="text-red-600 text-[70px] md:text-center pt-16">
            JOIN US
          </p>
          <p className="text-white text-[20px] text-start md:text-center">
            Join a great team, with great benefits!
          </p>
          <p className="text-white/60 font-light text-start md:text-center text-[14px] pb-[47px]">
            Shifts may vary depending on our business needs.
          </p>
        </div>
        <div className="ml-0 md:ml-[86px] mr-10 md:mr-[86px] lg:mx-auto max-w-4xl flex items-end justify-between">
          <Image
            className="w-full"
            src={"/assets/images/Intersect (1).png"}
            alt="Intersect"
            width={659}
            height={321}
          />
          <div className="-ml-20 pl-8 [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]">
            <p className="text-[36px] font-[400px] text-white text-center md:text-end">
              APPLY TODAY
            </p>
            <p className="hidden md:block w-[160.5px] text-wrap text-[12px] font-[400px] text-right text-white/60 nunito">
              We are accepting Resumes and Applications by email, fax, walk-ins
              and job fairs. We are open 24 hours a day. All casino employees
              must be at least 21 years of age to work on the Gaming Floor.
            </p>
          </div>
        </div>
        <div className="block md:hidden mx-10 mt-[30px]">
          <p className="w-full text-wrap text-[12px] font-[400px] text-white nunito">
            We are accepting Resumes and Applications by email, fax, walk-ins
            and job fairs. We are open 24 hours a day. All casino employees must
            be at least 21 years of age to work on the Gaming Floor.
          </p>
        </div>
        <div className="mx-10 md:mx-[86px] lg:mx-auto max-w-4xl mt-[97px]">
          <p className="text-[18px] font-[400px] text-white">
            FIND YOUR NEXT JOB IN our{" "}
            <p className="text-[36px]">5 opportunities</p>
          </p>
          <p className="mt-5 mb-10 text-[12px] font-[400px] text-white/30 nunito">
            If you want to be part of our Casino, apply now to join us! <br />
            Upload your resume and fill up the online application, we’ll contact
            you shortly.
          </p>
          <div className="block md:hidden nunito">
            <DraggableContainer />
          </div>
          <div className="hidden md:flex flex-row items-center flex-wrap w-full gap-2 mb-[78px] nunito">
            <div className="w-[233px] h-[268px] relative border border-white [&:has(.special:hover)]:border-gray-600 transition duration-500">
              <Image
                className="absolute -top-0.5 -left-0.5"
                src={"/assets/images/Vector 3.png"}
                alt="Molicule"
                width={54}
                height={61}
              />
              <Molicule className="special absolute top-[15.5px] right-[16.5px] text-gray-600 hover:text-white transition duration-500" />
              <div className="ml-[26px] mr-[30px] mt-[27px] mb-12 text-[14px]">
                <p className="text-white/40 font-light">Nov, 13</p>
                <div>
                  <p className="text-[20px] font-bold text-white">
                    Human Resources Generalist
                  </p>
                  <p className="text-white/40 font-light text-[14px]">
                    Elevate your career by joining our human resources team in
                    the gaming industry!
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-center px-4 noodle">
                <button
                  onClick={() => setIsOpen(true)}
                  className={`flex-5 bg-white flex justify-center items-center w-full h-[33.5px] -skew-x-16 cursor-pointer border rounded-xs border-white`}
                >
                  <p
                    className={`skew-x-16 text-red-600 max-w-[68px] text-[14px] font-normal text-wrap leading-none text-center`}
                  >
                    PREVIEW
                  </p>
                </button>
                <Link href={"/"}>
                  <BtnElement
                    className="flex-5 w-full h-[33.5px]"
                    color="red"
                    name="APPLY NOW"
                  />
                </Link>
              </div>
            </div>
            <JobPost
              onClick={() => setIsOpen(true)}
              className="hover:border-white [&:has(.special:hover)]:border-gray-600 transition-all duration-500"
              date="Nov, 9"
              title="Bartender"
              text="Bartenders prepare alcoholic or non-alcoholic beverages for bar and restaurant patrons."
            />
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <Image
                className="absolute -top-0.5 -left-0.5"
                src={"/assets/images/jackpot_corner.png"}
                alt="corner"
                width={54}
                height={61}
              />
              <Molicule className="absolute top-[17px] right-10 text-gray-600" />
              <div className="nunito flex flex-col gap-4">
                <div>
                  <p className="text-[12px] font-[300px] text-white/60">
                    Nov, 9
                  </p>
                  <p className="text-[20px] font-bold">Bartender</p>
                  <p className="text-white/60 font-[300px] text-[14px] mb-6">
                    Bartenders prepare alcoholic or non-alcoholic beverages for
                    bar and restaurant patrons.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-2 justify-between text-white/60">
                  <div className="flex-3">
                    <p className="text-white text-[14px] font-bold mb-2">
                      Requirements
                    </p>
                    <ul className="list-disc pl-4 text-[12px]">
                      <li>Must be 21 years or older</li>
                      <li>Must be willing to undergo background check</li>
                      <li>
                        Speak English fluently and coherently (bilingual a plus)
                      </li>
                    </ul>
                  </div>
                  <div className="flex-3">
                    <p className="text-white text-[14px] font-bold mb-2">
                      Qualifications
                    </p>
                    <ul className="list-disc pl-4 text-[12px]">
                      <li>
                        Have a minimum of 1 year of bartending experience in a
                        fast-paced environment
                      </li>
                      <li>
                        Basic math skills necessary to run cash register and
                        prepare cash drops
                      </li>
                    </ul>
                    <a className="underline underline-offset-3 text-[14px]">
                      See 4 more
                    </a>
                  </div>
                  <div className="flex-3">
                    <p className="text-white text-[14px] font-bold mb-2">
                      Work Hours and Availability
                    </p>
                    <ul className="list-disc pl-4 text-[12px]">
                      <li>
                        Day Shift:
                        <br /> 9:00 AM - 3:00 PM
                      </li>
                      <li>
                        Swing Shift:
                        <br /> 3:00 PM - 8:00 PM
                      </li>
                      <li>
                        Grave Shift:
                        <br /> 8:00 PM - 2:00 AM
                      </li>
                    </ul>
                  </div>
                  <div className="flex-2">
                    <p className="text-white text-[14px] font-bold mb-2">
                      Compensation and Benefits
                    </p>
                    <p className="text-[12px]">
                      Starting compensation is{" "}
                      <p className="inline text-white font-bold">$15.45</p>{" "}
                      hourly, plus tips. Employee benefits are available for all
                      qualifying full-time employees including: paid time off,
                      medical, vision, dental insurance, and a 25% employee
                      discount on food, non-alcoholic beverages.
                    </p>
                  </div>
                </div>
              </div>
              <Link href={"/"}>
                <BtnElement
                  className="noodle mt-5 float-right"
                  color="red"
                  name="apply now"
                />
              </Link>
            </Modal>
            <JobPost
              onClick={() => setIsOpen(true)}
              className="hover:border-white [&:has(.special:hover)]:border-gray-600 transition-all duration-500"
              date="Nov, 11"
              title="Security Officer"
              text="Security Officer candidates with specialty skills including customer service and concierge experience. "
            />
            <JobPost
              onClick={() => setIsOpen(true)}
              className="hover:border-white [&:has(.special:hover)]:border-gray-600 transition-all duration-500"
              date="Nov, 21"
              title="Chip Runner"
              text="Responsible for chip and cash transactions, issuing imprest bank carts and table banks, assisting with even-exchange employee transactions."
            />
            <JobPost
              onClick={() => setIsOpen(true)}
              className="hover:border-white [&:has(.special:hover)]:border-gray-600 transition-all duration-500"
              date="Nov, 17"
              title="Poker Dealer"
              text="We promote from within and often our gaming employees will have the opportunity to be promoted to Game Attendants."
            />
          </div>
          <div className="flex flex-col items-start md:flex-row md:items-center gap-4 justify-between mb-[76px]">
            <div className="flex-10/12">
              <p className="text-white text-[36px]">
                Not Finding What You&apos;re Looking For?
              </p>
              <p className="text-white/40 text-[12px] nunito">
                Share your information and we will contact you if new
                opportunities fitting your qualifications become available
              </p>
            </div>
            <div className="flex-2/12 w-full px-5 md:px-0">
              <button
                className={`bg-white flex justify-center items-center w-full h-[33.5px] -skew-x-16 cursor-pointer border rounded-xs border-white`}
              >
                <p
                  className={`hidden md:block skew-x-16 text-red-600 max-w-[68px] text-[14px] font-normal text-wrap leading-none text-center`}
                >
                  SEND RESUME
                </p>

                <p
                  className={`block md:hidden w-full skew-x-16 text-red-600 text-[14px] font-normal text-wrap leading-none text-center`}
                >
                  SEND US YOUR RESUME
                </p>
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              className="absolute top-0 left-0"
              src={"/assets/images/Vector 3.png"}
              alt="vector"
              width={84.5}
              height={94.5}
            />
            <div className="hidden md:block">
              <div className="flex justify-between ml-[35px] pt-[30px] gap-8 items-start">
                <div className="flex-6">
                  <p className="text-white text-[36px] font-normal">
                    why work at casino m8trix
                  </p>
                  <p className="text-red-600 text-[18px]">
                    Vestibulum, in leo, lorem sed interdum.
                  </p>
                  <p className="text-white/40 text-[14px] nunito">
                    Casino M8trix is an equal opportunity employer and no
                    employee, applicant, or candidate for hiring, promotion,
                    training or other benefit shall be discriminated against or
                    given preference based on race, color, creed, sex, sexual
                    orientation, religion, gender, gender identity, national
                    origin, age, disability, ancestry, medical condition,
                    marital status, veteran status, citizenship status, sexual
                    orientation, or any other category or status protected by
                    federal, state or local laws of an individual or that
                    individual’s associates or relatives. This policy governs
                    all aspects of our employment.
                  </p>
                </div>
                <Image
                  className="max-w-sm"
                  src={"/assets/images/Image20.jpg"}
                  alt="girl"
                  width={310}
                  height={264}
                />
              </div>
            </div>
            <div className="block md:hidden">
              <div className="flex flex-col justify-between ml-[35px] pt-[30px] gap-2">
                <div className="flex-6">
                  <p className="text-white text-[36px] font-normal">
                    why work at casino m8trix
                  </p>
                  <p className="text-red-600 text-[18px]">
                    Vestibulum, in leo, lorem sed interdum.
                  </p>
                </div>
                <Image
                  className="flex-6 w-full"
                  src={"/assets/images/Image20.jpg"}
                  alt="girl"
                  width={310}
                  height={264}
                />
                <p className="text-white/40 text-[14px] nunito">
                  Casino M8trix is an equal opportunity employer and no
                  employee, applicant, or candidate for hiring, promotion,
                  training or other benefit shall be discriminated against or
                  given preference based on race, color, creed, sex, sexual
                  orientation, religion, gender, gender identity, national
                  origin, age, disability, ancestry, medical condition, marital
                  status, veteran status, citizenship status, sexual
                  orientation, or any other category or status protected by
                  federal, state or local laws of an individual or that
                  individual’s associates or relatives. This policy governs all
                  aspects of our employment.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-14 relative border-2 border-red-600 inline-block p-8 float-right -skew-x-16 mb-3 shadow-[0_0_15px_rgba(255,0,0,0.9)]">
            <Image
              className="skew-x-16 absolute top-0 -right-10 -translate-[50%] bg-background p-2 "
              src={"/assets/images/Office Hours.png"}
              alt="OfficeHour"
              width={112}
              height={31}
            />
            <div className="flex gap-4 skew-x-16">
              <p className="text-white/40 text-[14px]">Phone</p>
              <p className="text-white text-[14px] underline underline-offset-1">
                408 484 6408
              </p>
            </div>
            <div className="flex gap-4 skew-x-16">
              <p className="text-white/40 text-[14px]">Email</p>
              <p className="text-white text-[14px] underline underline-offset-1">
                hiring@casinoma8trix.com
              </p>
            </div>
            <div className="flex gap-4 skew-x-16">
              <p className="text-white/40 text-[14px]">Monday to Friday</p>
              <p className="text-white text-[14px] underline underline-offset-1">
                8:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Employment;
