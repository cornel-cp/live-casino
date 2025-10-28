import Image from "next/image"
import { useState, useEffect } from "react"

const Carousel = () => {
    const [index, setIndex] = useState(0)
    const images = [
        { src: "/assets/images/carousel1.jpg", alt: "carousel1" },
        { src: "/assets/images/carousel2.jpg", alt: "carousel2" },
        { src: "/assets/images/carousel3.jpg", alt: "carousel3" }
    ]

    // Automatically change the image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000)
        return () => clearInterval(interval) // Clean up interval on unmount
    }, [])

    return (
        <div className="relative w-full overflow-hidden mt-10 md:mt-30">
            <div
                className="flex transition-all duration-2000 ease-in-out w-full md:w-2/3 mx-auto"
            >
                <div className="w-full min-h-auto md:h-[400px] brightness-50 hover:brightness-100"> {/* Full width for each image */}
                    <Image
                        className="object-cover"
                        src={images[index].src}
                        alt={images[index].alt}
                        layout="responsive"
                        width={400}
                        height={300}
                    />
                </div>
            </div>

            {/* Optional: Add navigation arrows */}
            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded brightness-50 hover:brightness-100"
                onClick={() => setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
            >
                &lt;
            </button>
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded brightness-50 hover:brightness-100"
                onClick={() => setIndex((prevIndex) => (prevIndex + 1) % images.length)}
            >
                &gt;
            </button>
        </div>
    )
}

export default Carousel
