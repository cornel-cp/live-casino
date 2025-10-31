"user client";

import EventComponent from "../components/events/eventComponent";
import Layout from "../components/layout/layout";

const Events = () => {
  return (
    <div className="bg-background">
      <Layout>
        {/* room Section */}
        <div
          className="w-full min-h-screen bg-no-repeat bg-size-[200%_100%] bg-position-[right_center] brightness-75 md:bg-cover md:bg-center flex flex-col justify-end"
          style={{
            backgroundImage: "url('/assets/images/bg_event_room.jpg')",
          }}
        >
          <div className="flex items-end justify-center bg-[url(/assets/images/bggradient_home.png)] bg-cover h-[469px]">
            <div className="">
              <p className="text-[100px] font-normal text-white leading-25">
                Events
              </p>
              <p className="text-[28px] font-normal pt-0 text-red-600 text-center pb-[69px]">
                AT CASINO M8TRIX
              </p>
            </div>
          </div>
        </div>
        <div className="md:max-w-3xl mx-10 md:mx-auto">
          <p className="text-[36px] mt-14 md:mt-12 text-center">
            Upcoming events
          </p>
          <div className="mt-10 md:mt-8 mb-12 md:mb-20 flex flex-col gap-7">
            <EventComponent
              imageUrl="/assets/images/image_dish (1).png"
              imageUrlHover="/assets/images/image_dish (5).png"
              time="Every Friday and Saturday Night From 5pm - 11pm"
              entertainment="Freshly shucked oysters"
            />
            <EventComponent
              imageUrl="/assets/images/image_dish (2).png"
              imageUrlHover="/assets/images/image_dish (5).png"
              time="Monday to Wednesday"
              entertainment="Drink Specials on the Gaming Floor and at Epic Bar"
            />
            <EventComponent
              imageUrl="/assets/images/image_dish (3).png"
              imageUrlHover="/assets/images/image_dish (5).png"
              time="Monday to Wednesday from 5pm - 11pm"
              entertainment="Gaming Floor Special"
            />
            <EventComponent
              imageUrl="/assets/images/image_dish (4).png"
              imageUrlHover="/assets/images/image_dish (5).png"
              time="Mondays & Tuesdays from 7pm - 10pm"
              entertainment="Raise the stakes on Pure 21.5 Blackjack"
            />
            <EventComponent
              imageUrl="/assets/images/image_dish (5).png"
              imageUrlHover="/assets/images/image_dish (5).png"
              time="Daily from 11am to 3pm"
              entertainment="Liquid Lunch Specials"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Events;
