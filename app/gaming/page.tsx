import Layout from "../components/layout/layout";
import GamesRules from "../components/gaming/gamesRules"
import GamesTable from "../components/gaming/gamesTable"
import EventSpaceCom from "../components/home/eventSpaceCom"

const Gaming = () => {

    return (
        <Layout>
            <div className="relative w-full min-h-screen flex flex-col justify-end items-center text-center overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 bg-[url(/assets/images/gaming_bg.png)] bg-no-repeat bg-cover bg-center brightness-50"></div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-white/10 to-[#181818]"></div>

                {/* Foreground content */}
                <div className="relative z-10 flex flex-col justify-end items-center pb-16 sm:pb-20 px-4">
                    <p className="text-[60px] lg:text-[100px] font-bold text-white leading-tight drop-shadow-lg">
                        ARE YOU IN?
                    </p>
                    <p className="text-[20px] lg:text-[24px] text-red-600 mt-3 drop-shadow-md">
                        TABLE GAMING AT CASINO M8TRIX
                    </p>
                </div>
            </div>

            <div className="bg-background flex flex-col items-center justify-center  max-w-6xl pt-12 md:pt-24 px-12 mx-auto">
                <div className="bg-background text-center border-2 border-red-600 mx-auto hidden md:flex md:flex-col">
                    <p className="text-white text-center text-[50px] -mt-10 bg-background max-w-[200px] mx-auto">GAMES</p>
                    <p className="text-[9px] text-white text-center nunito"><span className="font-bold">Last Update:</span> 07/06/2022 16:04:28</p>
                    <GamesTable />
                    {/* </div> */}
                </div>
                <GamesRules />
                <div className="py-14">
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
            </div>

        </Layout>

    )
}

export default Gaming