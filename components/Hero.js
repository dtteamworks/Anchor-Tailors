import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import { FaQuoteLeft } from "react-icons/fa";
import { outfit } from "./fonts/Outfit";
import Link from "next/link";

export default function Hero() {
  return (<div className="relative">
    <section className={`relative min-h-screen bg-black text-white overflow-hidden rounded-br-[350px] ${outfit.className}`}>
      <div className="container mx-auto px-6 py-12 relative z-10 ">
        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-6 py-2 rounded-full border border-gray-600 text-sm  text-slate-200">#1 ranked in the market</div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light mb-4">Perfect fit Tailoring Crafted with precision ,</h2>
          <h1 className={`text-5xl md:text-7xl font-semibold`}>Comfort & Style</h1>
        </div>

        {/* Content Grid */}
        <div className="relative flex justify-between gap-12 items-start *:flex-1 max-w-7xl mx-auto ">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Quote Icon */}
            <FaQuoteLeft className="text-6xl  text-gray-400" />

            {/* Description */}
            <p className=" text-lg text-[#FFFFFF99] leading-relaxed max-w-md">
              We provide expert tailoring services with a focus on precision,
              comfort, and style. From custom stitching to alterations, every
              garment is crafted with attention to detail...
            </p>

            {/* Contact Button */}
            <div className="w-fit relative rounded-full bg-white">
              <Link href={"tel:9441524214"} className="flex items-center border-2 border-black -translate-1 gap-2 px-8 py-4 bg-[#FF9000] hover:bg-[#e68200] text-white rounded-full font-medium transition-colors duration-300">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="pt-4">
              <div className="text-[#FF9000] text-5xl font-bold mb-2">1K+</div>
              <div className="text-xl text-gray-300">Happy Customers</div>
            </div>
          </div>
          {/* Review Card */}
          <div className="space-y-8 text-end  flex flex-col items-end">
            {/* Quote Icon */}
            <div className="border text-lg border-white/80 rounded-full bg-transparent text-[#FF9000] w-fit px-4 py-2 flex gap-2 items-center ">
              {" "}
              <FaStar /> 4.5/5
            </div>

            {/* Description */}
            <p className=" text-lg text-[#FFFFFF99] leading-relaxed max-w-md">
              “Perfect fitting with excellent stitching quality. The tailoring
              work was neat, comfortable, and delivered on time. Highly
              recommended.
            </p>

            <div className="flex gap-2 items-center">
              <div className="flex flex-col gap-0.5">
                <span className="text-lg font-medium">Payal Sharma</span>
                <span className="text-sm text-[#FFFFFF99]">
                  Verified Client
                </span>
              </div>
              <div className="size-15 rounded-full overflow-hidden">
                <Image
                  src={"/payalsharma.jpg"}
                  width={1440}
                  height={1024}
                  className="object-cover"
                  alt={"client"}
                />
              </div>
            </div>
          </div>

          <div className="absolute left-[25%] top-[10%]  ">
            <Image src={"/svgbg.png"} width={648} height={790} alt={"svgbg"}/>
          </div>
          <div className="absolute left-[32%]  w-162.5 h-162 ">
                <Image src={"/HeroComponentModal.png"} width={418} height={648} alt={"model"}/>
          </div>
        </div>
      </div>
        {/* Right Content - Image & Review */}
          {/* <div className="relative flex justify-center items-center">
            <div className="relative z-20 h-40">
              <Image
                src="/HeroComponentModal.png"
                alt="Tailoring Model"
                width={500}
                height={700}
                className="object-contain"
                priority
              />
            </div>
*/}
           

    </section>
            <div className="absolute bottom-3 right-10 z-50">
              <div className="w-10 h-14 border-2 border-[#00000099] rounded-full flex justify-center bg-[#EAEAEA] pt-2">
                <div className="w-1 h-3 bg-[#00000099] rounded-full animate-bounce" />
              </div>
            </div>
            </div>
  );
}
