import EventSpaceCom from "./eventSpaceCom"

const EventSpace = () => {


    return (
        <div className="bg-background flex flex-col items-center">
            <p className="text-[40px] md:text-[64px] text-white text-center">LOOKING FOR EVENT SPACES?</p>
            <EventSpaceCom
                text1="CASINO M8TRIX event tower"
                text2="luxurious Meeting and event spaces"
                text3="Due to restrictions put in place by Santa Clara County 
                Public Health Department, Casino M8trix has paused accepting 
                new event inquiries. We look forward to hosting 
                your next great event soon!"
                button1="EVENT REQUEST"
                button2="Venue Details"
                image="event_tower.png" />
            <EventSpaceCom
                text1="Casino M8TRIX Card academy"
                text2="Learn from the professionals"
                text3="This tutorial series was designed by top 
                professionals in the gaming industry with the goal 
                of introducing table gaming to players of all levels. 
                You will navigate the fundamentals and best strategies 
                for playing a variety of different games 
                offered at Casino M8trix."
                button1=""
                button2="Join academy"
                image="cardacadamy.jpg" />
        </div>
    )
}

export default EventSpace