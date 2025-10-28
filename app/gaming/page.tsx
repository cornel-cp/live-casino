import Layout from "../components/layout/layout";
import GamesRules from "../components/gaming/gamesRules"
import GamesTable from "../components/gaming/gamesTable"
import EventSpaceCom from "../components/home/eventSpaceCom"

const Gaming = () => {

    return (
        <Layout>
            <div className="bg-[url(/assets/images/gaming_bg.png)] bg-no-repeat bg-cover bg-center flex flex-col justify-end w-full min-h-screen" >
                <div className="bg-linear-to-b from-white/10 to-black/90 flex flex-col justify-end items-center pb-20">
                    <p className="text-[100px] text-white">ARE YOU IN?</p>
                    <p className="text-[24px] text-red-600">TABLE GAMING AT CASINO M8TRIX</p>
                </div>
            </div>
            <div className="bg-background flex flex-col items-center justify-center  max-w-6xl pt-24 px-12 mx-auto">
                <div className="bg-background text-center border-2 border-red-600 mx-auto hidden md:flex md:flex-col">
                    {/* <div className="bg-linear-to-b from-white/10 to-black/90"> */}
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
                        image="card_acadamy" />
                </div>
            </div>

        </Layout>

    )
}

export default Gaming