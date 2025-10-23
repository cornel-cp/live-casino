'use client'

import Layout from "../components/layout/layout"

const HomePage = () => {

    return (
        <Layout>
            {/* room Section */}
            <div className="bg-[url(/assets/images/bg_dining_room.jpg)] bg-no-repeat bg-cover h-[469px] flex flex-col justify-end w-full" >
                <div className="flex items-end justify-center bg-[url(/assets/images/bggradient_home.png)] bg-no-repeat bg-cover w-full h-[469px]">
                    <div className="">
                        <p className="text-[100px] font-normal text-white">DINING</p>
                        <p className="text-[28px] font-normal pt-0 text-red-600 text-center pb-[69px]">AT CASINO M8TRIX</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default HomePage

