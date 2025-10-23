'use client'

import { useState } from "react"
import Layout from "../components/layout/layout"
import Image from "next/image"

const HomePage = () => {


    return (
        <Layout>
            {/* Hero Section */}
            <div className="bg-[url(/assets/images/bg_home_hero.png)] bg-no-repeat bg-cover h-[469px] flex flex-col justify-end w-full" >
                <div className="bg-[url(/assets/images/bggradient_home.png)] bg-no-repeat bg-cover w-full h-[267px]"></div>
            </div>
        </Layout>
    )
}

export default HomePage

