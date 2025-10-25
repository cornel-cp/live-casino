import GamesRules from "../components/gaming/gamesRules"
import GamesTable from "../components/gaming/gamesTable"
import EventSpaceCom from "../components/home/eventSpaceCom"
import Footer from "../components/layout/footer"
import Header from "../components/layout/header"

const Gaming = () => {

    return (
        <div>
            <main className="">
                <Header className="absolute right-0" />
                <div className="bg-[url(/assets/images/gaming_header.png)] bg-no-repeat bg-cover h-[469px] flex flex-col justify-end w-full" >
                    <div className="bg-[url(/assets/images/bggradient_home.png)] bg-no-repeat bg-cover w-full h-[267px]"></div>
                </div>
                <div className="bg-black/50 relative flex flex-col justify-center pt-20">
                    <div className="bg-[url(/assets/images/rectangle_gaming.png)] bg-no-repeat w-[722px] mx-auto relative">
                        <div className="bg-[url(/assets/images/table_gradient.png)] bg-no-repeat bg-cover w-full h-[60px] absolute bottom-2.5"></div>
                        <p className="text-white text-center text-[50px] -mt-10">GAMES</p>
                        <p className="text-[9px] text-white text-center">Last Update: 07/06/2022 16:04:28</p>
                        <GamesTable />
                    </div>
                </div>
                <GamesRules />
                <div className="px-15 pt-14 bg-black/50 pb-14">
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
                        image="card_acadamy" />
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default Gaming