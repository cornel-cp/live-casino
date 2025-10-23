'use client'

import { useState } from "react"
import Layout from "../components/layout/layout"
import Image from "next/image"

const HomePage = () => {

    const [name, setName] = useState("")

    return (
        <Layout>
            {/* Hero Section */}
            <div className="bg-[url(/assets/images/bg_home_hero.png)] bg-no-repeat bg-cover min-h-screen flex w-full" >
                <div>
                    <p>Hello {name}!</p>
                    <div>
                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="text-2xl bg-gray rounded-lg w-full max-w-[300px]" />
                    </div>
                    Hey there This is home page
                </div>
            </div>
        </Layout>
    )
}

export default HomePage

