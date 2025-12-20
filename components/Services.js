import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { outfit } from './fonts/Outfit';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Shirt Stitching",
      description: "Custom- stitched shirts made with attention to detail, ensuring comfort, style, and a perfect fit for every occasion..",
      image: "/serviceImg1.png"
    },
    {
      id: 2,
      title: "Pant Stitching",
      description: "Custom- stitched shirts made with attention to detail, ensuring comfort, style, and a perfect fit for every occasion..",
      image: "/serviceImg2.png"
    },
    {
      id: 3,
      title: "Suit Stitching",
      description: "Custom- stitched shirts made with attention to detail, ensuring comfort, style, and a perfect fit for every occasion..",
      image: "/serviceImg3.png"
    },
    {
      id: 4,
      title: "Alteration Service",
      description: "Custom- stitched shirts made with attention to detail, ensuring comfort, style, and a perfect fit for every occasion..",
      image: "/serviceImg4.png"
    },
    {
      id: 5,
      title: "Measurement at Home",
      description: "Custom- stitched shirts made with attention to detail, ensuring comfort, style, and a perfect fit for every occasion..",
      image: "/serviceImg5.png"
    },
    {
      id: 6,
      title: "Kurta Stitching",
      description: "Custom- stitched shirts made with attention to detail, ensuring comfort, style, and a perfect fit for every occasion..",
      image: "/serviceImg6.png"
    }
  ];

  return (
    <section className={`py-20 px-4 bg-white ${outfit.className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Our Tailoring Services
          </h2>
          <p className="text-gray-600 text-lg">
            Quality stitching and alteration services crafted for the perfect fit.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="cursor-pointer bg-linear-to-br from-[#FFE4C0] to-[#FFF8EF] rounded-2xl p-8 px-6 flex flex-col items-center text-center  hover:scale-105 scale-95 transition-all duration-200 ease-in hover:shadow-lg"
            >
              {/* Image Container */}
              <div className="relative w-40 h-40 mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                  priority={service.id <= 3}
                />
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 grow">
                {service.description}
              </p>

              {/* Button */}
              <button className="border-2 border-[#FF9000] text-sm cursor-pointer text-[#FF9000] px-6 py-2.5 rounded-full font-medium hover:bg-[#FF9000] hover:text-white transition-all duration-300 ease-in-out">
                View details
              </button>
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="flex justify-center">
          <div className="relative border bg-black ml-4 rounded-full">
            <button className="bg-[#FF9000] -translate-2 border-2 cursor-pointer border-black text-white px-8 py-3.5 rounded-full font-semibold text-lg flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-0.5">
              Contact Us
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;