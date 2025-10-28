"use client";

import Image from "next/image";

// Define a type for the image props for clarity and reusability
interface DiningImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const DiningImage: React.FC<DiningImageProps> = ({ src, alt, width, height }) => {
    return (
        <Image
            className="bg-center mx-auto brightness-50 hover:brightness-100 hover:scale-110 transition-all duration-1000 
        h-20 w-[120px] 
        sm:h-[120px] sm:w-[150px] 
        md:h-[150px] md:w-[200px] 
        lg:h-[170px] lg:w-[230px] 
        xl:h-[200px] xl:w-[300px]"
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    );
};

const HomeDining = () => {
    const images = [
        { src: "/assets/images/dining_first.jpg", alt: "dining1", width: 300, height: 181 },
        { src: "/assets/images/dining_second.jpg", alt: "dining2", width: 300, height: 181 },
        { src: "/assets/images/dining_third.jpg", alt: "dining3", width: 300, height: 181 },
        { src: "/assets/images/dining_fourth.jpg", alt: "dining4", width: 300, height: 181 },
    ];

    return (
        <div className="bg-background mb-5 mx-auto xl:max-w-4xl lg:max-w-3xl md:max-w-[340px] sm:max-w-[280px] max-w-[200px]">
            <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center text-white pt-[60px] pb-[30px]">
                Dining
            </p>
            <div className="grid grid-cols-2 justify-center -ml-20 sm:grid-cols-2 sm:-ml-30 md:-ml-24 lg:grid-cols-3 lg:-ml-16 xl:grid-cols-4 items-center pb-[120px] -skew-x-24 gap-4">
                {images.map((image) => (
                    <DiningImage
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomeDining;