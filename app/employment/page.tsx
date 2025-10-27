"user client";

import Image from "next/image";
import Layout from "../components/layout/layout";
import JobPost from "../components/employment/jobPost";
import BtnElement from "../components/BtnElement/BtnElement";
import Molicule from "../components/icons/molicule";

const Employment = () => {
  return (
    <div className="bg-background">
      <Layout>
        <div className="ml-10 md:ml-0">
          <Image
            className="mt-[111px] md:mx-auto"
            src="/assets/images/WELCOME BACK.png"
            alt="Intersect"
            width={165}
            height={77}
          />
          <p className="text-white text-[20px] text-start md:text-center pt-[19px]">
            Join a great team, with great benefits!
          </p>
          <p className="text-white/60 font-light text-start md:text-center text-[14px] pb-[47px]">
            Shifts may vary depending on our business needs.
          </p>
        </div>
        <div className="max-w-5xl mx-auto w-full flex items-end">
          <Image
            src={"/assets/images/Intersect (1).png"}
            alt="Intersect"
            width={659}
            height={421}
          />
          <div className="-ml-20 pl-8 [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]">
            <p className="text-[36px] font-[400px] text-white text-center md:text-end">
              APPLY TODAY
            </p>
            <p className="hidden md:block w-[160.5px] text-wrap text-[12px] font-[400px] text-right text-white/60">
              We are accepting Resumes and Applications by email, fax, walk-ins
              and job fairs. We are open 24 hours a day. All casino employees
              must be at least 21 years of age to work on the Gaming Floor.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <p className="text-[18px] font-[400px] text-white">
            FIND YOUR NEXT JOB IN our{" "}
            <p className="text-[36px]">5 opportunities</p>
          </p>
          <p className="mt-5 mb-10 text-[12px] font-[400px] text-white/30">
            If you want to be part of our Casino, apply now to join us! <br />
            Upload your resume and fill up the online application, we’ll contact
            you shortly.
          </p>
          <div className="flex flex-wrap gap-3 mb-[78px] items-center justify-center">
            <div className="w-[233px] h-[268px] relative border border-white">
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
              <div className="flex gap-2 justify-center">
                <button
                  className={`bg-white flex justify-center items-center w-[93px] h-[33.5px] -skew-x-16 cursor-pointer border rounded-xs border-white`}
                >
                  <p
                    className={`skew-x-16 text-red-600 max-w-[68px] text-[14px] font-normal text-wrap leading-none text-center`}
                  >
                    PREVIEW
                  </p>
                </button>
                <BtnElement className="" color="red" name="APPLY NOW" />
              </div>
            </div>
            <JobPost
              className="hover:border-white [&:has(.special:hover)]:border-gray-600 transition-all duration-500"
              date="Nov, 9"
              title="Bartender"
              text="Bartenders prepare alcoholic or non-alcoholic beverages for bar and restaurant patrons."
            />
            <JobPost
              className="hover:border-white [&:has(.special:hover)]:border-gray-600 transition-all duration-500"
              date="Nov, 11"
              title="Security Officer"
              text="Security Officer candidates with specialty skills including customer service and concierge experience. "
            />
            <JobPost
              className="hover:border-white [&:has(.special:hover)]:border-gray-600 transition-all duration-500"
              date="Nov, 21"
              title="Chip Runner"
              text="Responsible for chip and cash transactions, issuing imprest bank carts and table banks, assisting with even-exchange employee transactions."
            />
            <JobPost
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
              <p className="text-white/40 text-[12px]">
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
          <div className="relative max-w-5xl mx-auto">
            <Image
              className="absolute top-0 left-0"
              src={"/assets/images/Vector 3.png"}
              alt="vector"
              width={84.5}
              height={94.5}
            />
            <div className="flex justify-between px-4 pt-[30px] gap-8">
              <div className="flex-6">
                <p className="text-white 36px font-normal">
                  why work at casino m8trix
                </p>
                <p className="text-red-600 text-[18px]">
                  Vestibulum, in leo, lorem sed interdum.
                </p>
                <p className="text-white/40 text-[14px]">
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
          <div className="w-full md:w-1/2 mt-14 relative border-2 border-red-600 inline-block p-8 float-right -skew-x-16 mb-3">
            <Image
              className="skew-x-16 absolute top-0 -right-10 -translate-[50%]  p-2 bg-background"
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
