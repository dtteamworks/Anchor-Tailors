import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { outfit } from "./fonts/Outfit";

export default function HeroMobile() {
  return (
    <div className="relative">
      <section className={`relative min-h-screen bg-black text-white overflow-hidden rounded-br-[150px] ${outfit.className}`}>
        <div className="container mx-auto *:px-4 py-8 sm:py-12 relative z-10">
          {/* Top Badge */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 rounded-full border border-gray-600 text-xs sm:text-sm text-slate-200">
              #1 ranked in the market
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-xl font-light mb-3 sm:mb-4">
              Perfect fit Tailoring Crafted with precision ,
            </h2>
            <h1 className="text-3xl  font-semibold">
              Comfort & Style
            </h1>
          </div>

          {/* Content Grid */}
          <div className="relative max-w-7xl mx-auto">
            {/* Mobile/Tablet Layout (< lg) */}
            <div className="lg:hidden space-y-8  mt-12">
                <div className="relative size-96">
                  <Image
                    src="/svgbg.png"
                    fill
                    className="object-contain"
                    alt="background"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/HeroComponentModal.png"
                      width={280}
                      height={420}
                      className="object-contain"
                      alt="model"
                      priority
                    />
                  </div>
                  <div className="w-full bg-black h-16 absolute  -bottom-7"/>
              </div>
              {/* Left Content */}
              <div className="space-y-3 -translate-y-12">
                <FaQuoteLeft className="text-xl text-gray-400" />
                
                <p className="text-base sm:text-lg text-[#FFFFFF99] leading-relaxed">
                  We provide expert tailoring services with a focus on precision,
                  comfort, and style. From custom stitching to alterations, every
                  garment is crafted with attention to detail...
                </p>
              </div>

              {/* Review Card - Mobile */}
              <div className="space-y-6 -translate-y-8 flex flex-col items-start">
                <div className="flex flex-row justify-between w-full">

                <div className="border text-base sm:text-lg border-white/80 rounded-full bg-transparent text-[#FF9000] w-fit px-4 py-2 flex gap-2 items-center">
                  <FaStar /> 4.5/5
                </div>
                <div className="flex gap-3 items-center flex-row-reverse sm:flex-row">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/payalsharma.jpg"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                      alt="client"
                      />
                  </div>
                  <div className="flex flex-col gap-0.5 text-right sm:text-left">
                    <span className="text-base sm:text-lg font-medium">Payal Sharma</span>
                    <span className="text-xs sm:text-sm text-[#FFFFFF99]">
                      Verified Client
                    </span>
                  </div>
                </div>
                      </div>

                <p className="text-base sm:text-lg text-[#FFFFFF99] leading-relaxed sm:max-w-md">
                  "Perfect fitting with excellent stitching quality. The tailoring
                  work was neat, comfortable, and delivered on time. Highly
                  recommended.
                </p>

              </div>
            </div>

            {/* Desktop Layout (>= lg) */}
            <div className="hidden lg:flex justify-between gap-12 items-start">
              {/* Left Content */}
              <div className="flex-1 space-y-8">
                <FaQuoteLeft className="text-6xl text-gray-400" />

                <p className="text-lg text-[#FFFFFF99] leading-relaxed max-w-md">
                  We provide expert tailoring services with a focus on precision,
                  comfort, and style. From custom stitching to alterations, every
                  garment is crafted with attention to detail...
                </p>

                <div className="w-fit relative rounded-full bg-white">
                  <button className="flex items-center border-2 border-black gap-2 px-8 py-4 bg-[#FF9000] hover:bg-[#e68200] text-white rounded-full font-medium transition-colors duration-300">
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="pt-4">
                  <div className="text-[#FF9000] text-5xl font-bold mb-2">1K+</div>
                  <div className="text-xl text-gray-300">Happy Customers</div>
                </div>
              </div>

              {/* Center Images - Desktop */}
              <div className="absolute left-[25%] top-[10%]">
                <Image src="/svgbg.png" width={648} height={790} alt="svgbg" />
              </div>
              <div className="absolute left-[32%]">
                <Image src="/HeroComponentModal.png" width={418} height={648} alt="model" priority />
              </div>

              {/* Review Card - Desktop */}
              <div className="flex-1 space-y-8 text-end flex flex-col items-end">
                <div className="border text-lg border-white/80 rounded-full bg-transparent text-[#FF9000] w-fit px-4 py-2 flex gap-2 items-center">
                  <FaStar /> 4.5/5
                </div>

                <p className="text-lg text-[#FFFFFF99] leading-relaxed max-w-md">
                  "Perfect fitting with excellent stitching quality. The tailoring
                  work was neat, comfortable, and delivered on time. Highly
                  recommended.
                </p>

                <div className="flex gap-2 items-center">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-lg font-medium">Payal Sharma</span>
                    <span className="text-sm text-[#FFFFFF99]">Verified Client</span>
                  </div>
                  <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/payalsharma.jpg"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                      alt="client"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="absolute -bottom-1 right-3 sm:right-10 z-50">
        <div className="w-8 h-12 sm:w-10 sm:h-14 border-2 border-[#00000099] rounded-full flex justify-center bg-[#EAEAEA] pt-2">
          <div className="w-1 h-3 bg-[#00000099] rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}