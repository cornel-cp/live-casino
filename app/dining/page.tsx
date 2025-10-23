'use client'

import Layout from "../components/layout/layout"

const HomePage = () => {

    return (
        <Layout>
            {/* room Section */}
            <div className="bg-[url(/assets/images/bg_dining_room.jpg)] bg-no-repeat bg-cover h-[469px] flex flex-col justify-end w-full" >
                <div className="bg-[url(/assets/images/bggradient_home.png)] bg-no-repeat bg-cover w-full h-[469px]"></div>
            </div>
        </Layout>
    )
}

export default HomePage

