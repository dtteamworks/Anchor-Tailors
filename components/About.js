import Image from 'next/image';
import { outfit } from './fonts/Outfit';

const About = () => {
  const features = [
    {
      id: 1,
      icon: "/aboultLeft1.png",
      title: "Experienced Tailors",
      description: "Professionally trained tailors focused on quality and fit"
    },
    {
      id: 2,
      icon: "/aboultLeft2.png",
      title: "Quality Work",
      description: "Professionally trained tailors focused on quality and fit"
    },
    {
      id: 3,
      icon: "/aboultLeft3.png",
      title: "On-Time Delivery",
      description: "Professionally trained tailors focused on quality and fit"
    }
  ];

  const imagePositions = [
    // Top row - 3 images
    { src: "/aboutImg1.jpg", className: "col-span-1 row-span-2" },
    { src: "/aboutImg2.jpg", className: "col-span-1 row-span-1" },
    { src: "/aboutImg3.jpg", className: "col-span-1 row-span-2" },
    
    // Middle row - 2 images
    { src: "/aboutImg4.jpg", className: "col-span-1 row-span-2" },
    { src: "/aboutImg5.jpg", className: "col-span-1 row-span-2" },
    
    // Bottom row - 4 images
    { src: "/aboutImg6.jpg", className: "col-span-1 row-span-1" },
    { src: "/aboutImg7.jpg", className: "col-span-1 row-span-2" },
    { src: "/aboutImg8.jpg", className: "col-span-1 row-span-2" },
    { src: "/aboutImg9.jpg", className: "col-span-1 row-span-1" }
  ];

  return (
    <section className={`relative bg-white overflow-hidden ${outfit.className}`}>
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Section - Background */}
        <div className="bg-[#FF9000] text-white px-8 md:px-12 lg:px-16 py-16 lg:py-24 flex flex-col justify-start items-center relative">
          {/* Content */}
          <div className="relative z-10 max-w-xl">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-[70px] font-light mb-2 leading-tight">
              About Our<br />Tailoring Studio
            </h2>
            
            {/* Description */}
            <p className="text-base md:text-[22px] text-[#FFFFFF99] mb-4 opacity-90 leading-relaxed">
              We are professional tailors with years of experience, delivering high quality stitching and perfect fitting for every customer.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start flex-col gap-2">
                  {/* Icon */}
                  <div className="relative size-10 shrink-0 bg-white rounded-full p-2">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-cover p-2"
                    />
                  </div>
                  
                  {/* Text */}
                  <div>
                    <h3 className="text-[18px] font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-sm opacity-80">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

         
        </div>

        {/* Right Section - Image Grid */}
        <div className="bg-[#FF9000] p-4 lg:p-2 z-30">
          <div className="grid grid-cols-3 auto-rows-[40px] md:auto-rows-[140px] lg:auto-rows-[160px] gap-4 h-full">
            {imagePositions.map((img, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden border-2 md:border-4 border-white ${img.className} group`}
              >
                <Image
                  src={img.src}
                  alt={`Tailoring showcase ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
       {/* Bottom Wave Layer */}
          <div className="absolute -bottom-1 sm:bottom-0 left-0 right-0 w-full h-24 md:h-32 z-50">
            <Image
              src="/aboutBottomLayer.png"
              alt="Wave decoration"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
    </section>
  );
};

export default About;