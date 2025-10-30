import React from "react";

const brands = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
];

const TrustedBrands: React.FC = () => {
    return (
        <section className="py-10 bg-gray-50 text-center  overflow-hidden ">
            {/* Heading */}
            <h2 className="text-3xl font-cisco font-bold mb-10">
                Our{" "}
                <span className=" text-blue-600">
                    Trusted Brands
                </span>
            </h2>

            {/* Horizontal Marquee */}
            <div className="relative overflow-hidden group   ">
                <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
                    {[...brands, ...brands].map((brand, index) => (
                        <div
                            key={index}
                            className="inline-flex flex-col items-center justify-center mx-10 group/logo"
                        >
                            <div className="w-28 h-20 flex items-center justify-center grayscale group-hover/logo:grayscale-0 transition duration-300">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="object-contain max-h-16 transition-transform duration-300 group-hover/logo:scale-110"
                                />
                            </div>
                            <p className="text-sm text-gray-700 font-medium opacity-0 group-hover/logo:opacity-100 mt-2 transition duration-300">
                                {brand.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBrands;
