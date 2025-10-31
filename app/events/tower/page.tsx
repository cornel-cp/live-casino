"use client";

import FadeImageLoop from "@/app/components/Animations/fadeAction";
import ResponsiveBg from "@/app/components/Animations/responsiveBg";
import BtnElement from "@/app/components/BtnElement/BtnElement";
import FacebookIcon from "@/app/components/icons/facebookIcon";
import InstagramIcon from "@/app/components/icons/instagramIcon";
import Layout from "@/app/components/layout/layout";
import Image from "next/image";
import Link from "next/link";

const Tower = () => {
  return (
    <>
      <Layout>
        {/* main image Part */}
        <ResponsiveBg>
          <div className="flex items-end justify-center bg-[url(/assets/images/bggradient_home.png)] bg-no-repeat bg-cover w-full h-[469px]"></div>
        </ResponsiveBg>
        <div className="md:max-w-4xl mx-7 md:mx-auto">
          <div className="md:my-7">
            <Link
              href="/events"
              className="group text-white/40 md:text-white text-[14px] inline-flex items-center gap-1 transition"
            >
              <span className="text-[14px] font-bold text-white/40 md:text-white pr-2">
                &lt;
              </span>
              <span>
                Back to <span className="group-hover:text-red-600">events</span>
              </span>
            </Link>
            <div className="pt-11 md:pt-4">
              <p className="text-red-600 text-[18px] text-center">
                Casino M8trix
              </p>
              <p className="pb-3.5 md:pb-0 text-[64px] text-center">
                Event Tower
              </p>
            </div>
          </div>
          <div className="pt-8 pb-8 md:py-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2.5 md:gap-7 p-7 border-4 border-red-600 shadow-[0_0_10px_rgba(255,0,0,0.9)] rounded-xs">
              <p className="text-[28px] flex-2">REquest a proposal</p>
              <p className="flex-8 nunito text-[12px] font-light text-white/60 pb-2.5 md:pb-0">
                All events must be booked a minimum of 2 weeks in advance. Once
                your request is submitted, one of our Corporate Event
                Coordinators will contact you within 24 hours, Monday thru
                Friday.
              </p>
              <BtnElement
                className="flex-2 h-[34px] w-[95%] mx-auto md:mx-0 md:w-full px-2"
                color="red"
                name="event request"
              />
            </div>
          </div>
          <div className="py-14 md:py-20">
            <div className="relative pl-3 pt-3 md:pl-7 md:pt-7 pr-3 md:pr-0">
              <Image
                className="absolute -top-3 -left-3"
                src={"/assets/images/Vector 30.svg"}
                alt="Vector"
                width={84.5}
                height={94.5}
              />
              <Image
                className="absolute top-0 left-0"
                src={"/assets/images/Vector 31.svg"}
                alt="Vector"
                width={84.5}
                height={94.5}
              />
              <div className="flex flex-col md:flex-row md:gap-2.5">
                <div className="w-full pb-5 md:pb-0">
                  <p className="text-[36px]">CASINO M8TRIX event tower</p>
                  <p className="text-[18px] text-red-600">
                    luxurious Corporate Meeting and event spaces
                  </p>
                  <p className="hidden md:block mt-5 text-[14px] nunito text-white/60 font-extralight">
                    Located on the{" "}
                    <span className="font-bold text-white">fifth, sixth</span>,
                    and{" "}
                    <span className="font-bold text-white">seventh floors</span>{" "}
                    of Casino M8trix’s high rise building, our luxurious meeting
                    and event spaces provide picturesque views of Silicon Valley
                    and are ideal for corporate events, meetings and
                    team-building.
                  </p>
                </div>
                <FadeImageLoop />
                <p className="block md:hidden pt-7 text-[14px] nunito text-white/60 font-extralight">
                  Located on the{" "}
                  <span className="font-bold text-white">fifth, sixth</span>,
                  and{" "}
                  <span className="font-bold text-white">seventh floors</span>{" "}
                  of Casino M8trix’s high rise building, our luxurious meeting
                  and event spaces provide picturesque views of Silicon Valley
                  and are ideal for corporate events, meetings and
                  team-building.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-7 pb-22">
            <p className="text-center text-[50px] pb-18 md:pb-12">
              Venue details
            </p>
            <div className="relative pl-3 pt-3 md:pl-7 md:pt-7 pr-3 md:pr-0 pb-18">
              <Image
                className="absolute -top-3 -left-3"
                src={"/assets/images/Vector 30.svg"}
                alt="Vector"
                width={84.5}
                height={94.5}
              />
              <Image
                className="absolute top-0 left-0"
                src={"/assets/images/Vector 31.svg"}
                alt="Vector"
                width={84.5}
                height={94.5}
              />
              <div className="flex flex-col md:flex-row md:gap-2.5">
                <div className="w-full pb-5 md:pb-0">
                  <p className="text-[36px]">VIP Lounge</p>
                  <p className="text-[18px] text-red-600">7th floor</p>
                  <div className="hidden md:block">
                    <p className="text-[14px] nunito text-white/60 font-extralight">
                      Located on the{" "}
                      <span className="font-bold text-white">7th floor</span>,
                      our state-of-the-art entertainment lounge spans four
                      beautifully designed rooms, all with sweeping views.
                    </p>
                    <br />
                    <p className="text-[14px] nunito text-white/60 font-extralight">
                      Our VIP Lounge is the perfect setting for corporate
                      parties, team building activities, and networking events.
                    </p>
                    <br />
                    <p className="text-[14px] nunito text-white/60 font-extralight">
                      Accommodates up to 80 guests.
                    </p>
                  </div>
                </div>
                <Image
                  className="w-full h-[250px] hover:shadow-[0_0_15px_rgba(255,255,255,0.9)] hover:brightness-150 transition duration-800"
                  src={"/assets/images/branch.jpg"}
                  alt="sofa"
                  width={358}
                  height={178}
                />
                <div className="block md:hidden">
                  <p className="text-[14px] nunito pt-5 text-white/60 font-extralight">
                    Located on the{" "}
                    <span className="font-bold text-white">7th floor</span>, our
                    state-of-the-art entertainment lounge spans four beautifully
                    designed rooms, all with sweeping views.
                  </p>
                  <br />
                  <p className="text-[14px] nunito text-white/60 font-extralight">
                    Our VIP Lounge is the perfect setting for corporate parties,
                    team building activities, and networking events.
                  </p>
                  <br />
                  <p className="text-[14px] nunito text-white/60 font-extralight">
                    Accommodates up to 80 guests.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative pl-3 pt-3 md:pl-7 md:pt-7 pr-3 md:pr-0 pb-18">
              <Image
                className="absolute -top-3 -left-3"
                src={"/assets/images/Vector 30.svg"}
                alt="Vector"
                width={84.5}
                height={94.5}
              />
              <Image
                className="absolute top-0 left-0"
                src={"/assets/images/Vector 31.svg"}
                alt="Vector"
                width={84.5}
                height={94.5}
              />
              <div className="flex flex-col md:flex-row md:gap-2.5">
                <div className="w-full  pb-5 md:pb-0">
                  <p className="text-[36px]">Orchid Room & Bamboo Room</p>
                  <p className="text-[18px] text-red-600 pb-2">
                    5th & 6th Floor
                  </p>
                  <div className="hidden md:flex justify-start gap-12 nunito">
                    <ul className="list-disc text-white/40 font-light pl-4">
                      <li>1,922 Sq. Ft.</li>
                      <li>31&apos; x 61&apos;</li>
                      <li>18&apos; Ceiling Height</li>
                      <li>80 Guests</li>
                    </ul>
                    <ul className="list-disc text-white/40 font-light pl-4">
                      <li>Chairs & Tables</li>
                      <li>Linens</li>
                      <li>Glassware</li>
                      <li>Dishware & Silverware</li>
                    </ul>
                  </div>
                </div>
                <Image
                  className="w-full h-[203px] hover:shadow-[0_0_15px_rgba(255,255,255,0.9)] brightness-75 hover:brightness-100  transition duration-800"
                  src={"/assets/images/entertain.png"}
                  alt="sofa"
                  width={358}
                  height={178}
                />
                <div className="flex md:hidden justify-around md:justify-start gap-12 nunito pt-5">
                  <ul className="list-disc text-white/40 font-light pl-4">
                    <li>1,922 Sq. Ft.</li>
                    <li>31&apos; x 61&apos;</li>
                    <li>18&apos; Ceiling Height</li>
                    <li>80 Guests</li>
                  </ul>
                  <ul className="list-disc text-white/40 font-light pl-4">
                    <li>Chairs & Tables</li>
                    <li>Linens</li>
                    <li>Glassware</li>
                    <li>Dishware & Silverware</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:hidden flex flex-col md:flex-row justify-between gap-5 md:gap-3">
              {[
                {
                  title: "Parallel Lounge",
                  subtitle: "Casino floor",
                  details: ["3 Hour Rental", "Up To 25 Guests", "No Venue Fee"],
                  image: "/assets/images/living_room.jpg",
                },
                {
                  title: "Zone 8",
                  subtitle: "Casino floor",
                  details: [
                    "6 Hour Rental",
                    "Up To 125 Guests",
                    "Full Restaurant Buyout",
                  ],
                  image: "/assets/images/rest.png",
                },
                {
                  title: "Epic Bar",
                  subtitle: "Casino floor",
                  details: [
                    "The bar serves finely crafted cocktails, draft beers, wines by the glass, and an appetizer and dining menu.",
                  ],
                  image: "/assets/images/palace.png",
                },
              ].map(({ title, subtitle, details, image }, i) => (
                <div
                  key={i}
                  className="group flex-1 transition-all duration-700 ease-in-out transform hover:scale-x-75 hover:scale-y-75 origin-top-left"
                >
                  <div className="border-2 border-white/40 group-hover:border-red-600 rounded-xs overflow-hidden transition-all duration-700 ease-in-out">
                    <div className="pt-7 pb-5 px-6.5 transition-all duration-700 ease-in-out">
                      <div className="mb-3">
                        <p className="text-[28px] text-center">{title}</p>
                        <p className="text-[18px] text-red-600 text-center">
                          {subtitle}
                        </p>
                      </div>
                      <ul className="list-disc text-white/60 font-light text-[12px] nunito pl-4 space-y-1">
                        {details.map((d, j) => (
                          <li key={j}>{d}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative w-full h-[165px] group-hover:h-20 overflow-hidden transition-all duration-700 ease-in-out">
                      <Image
                        className="brightness-50 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        src={image}
                        alt={title}
                        fill
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out">
                        <p className="leading-none text-[14px]">360°</p>
                        <Image
                          src={"/assets/images/rotate.svg"}
                          alt="rotate"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:flex hidden flex-col md:flex-row justify-between gap-5 md:gap-3">
              <div className="flex-4 border-2 border-white/40 hover:border-red-600 transition-all duration-800">
                <div className="pt-7 pb-5 px-6.5">
                  <div>
                    <p className="text-[28px] text-center">Parallel Lounge</p>
                    <p className="text-[18px] text-red-600 text-center">
                      Casino floor
                    </p>
                  </div>
                  <ul className="list-disc text-white/60 font-light text-[12px] nunito pl-4">
                    <li>3 Hour Rental</li>
                    <li>Up To 25 Guests</li>
                    <li>No Venue Fee</li>
                  </ul>
                </div>
                <div className="relative w-full h-[165px]">
                  <Image
                    className="brightness-50 object-cover"
                    src="/assets/images/living_room.jpg"
                    alt="livingRoom"
                    fill
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="leading-none text-[14px]">360°</p>
                    <Image
                      src={"/assets/images/rotate.svg"}
                      alt="rotate"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-4 border-2 border-white/40 hover:border-red-600 transition-all duration-800">
                <div className="pt-7 pb-5 px-6.5">
                  <div>
                    <p className="text-[28px] text-center">Zone 8</p>
                    <p className="text-[18px] text-red-600 text-center">
                      Casino floor
                    </p>
                  </div>
                  <ul className="list-disc text-white/60 font-light text-[12px] nunito pl-4">
                    <li>6 Hour Rental</li>
                    <li>Up To 125 Guests</li>
                    <li>Full Restaurant Buyout</li>
                  </ul>
                </div>
                <div className="relative w-full h-[165px]">
                  <Image
                    className="brightness-50 object-cover"
                    src="/assets/images/rest.png"
                    alt="livingRoom"
                    fill
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="leading-none text-[14px]">360°</p>
                    <Image
                      src={"/assets/images/rotate.svg"}
                      alt="rotate"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-4 border-2 border-white/40 hover:border-red-600 transition-all duration-800">
                <div className="pt-7 pb-5 px-6.5">
                  <div>
                    <p className="text-[28px] text-center">Epic Bar</p>
                    <p className="text-[18px] text-red-600 text-center">
                      Casino floor
                    </p>
                  </div>
                  <ul className="list-disc text-white/60 font-light text-[12px] nunito pl-4">
                    The bar serves finely crafted cocktails, draft beers, wines
                    by the glass, and an appetizer and dining menu.
                  </ul>
                </div>
                <div className="relative w-full h-[165px]">
                  <Image
                    className="brightness-50 object-cover"
                    src="/assets/images/palace.png"
                    alt="livingRoom"
                    fill
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="leading-none text-[14px]">360°</p>
                    <Image
                      src={"/assets/images/rotate.svg"}
                      alt="rotate"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Tower;
