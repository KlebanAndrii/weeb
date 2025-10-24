import mobile from "../assets/testimonials/mobile.svg";
import arrowRight from "../assets/icon/arrow-right.svg";
import userAvatar from "../assets/testimonials/user.jpg";

function Testimonials() {
  return (
    <section className="bg-purple-900">
      <div className="container py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-y-12 lg:gap-x-20">
          <div className="w-full lg:max-w-96 text-center lg:text-start">
            <span className="block text-white text-xl font-bold uppercase leading-tight tracking-[3px] mb-4">
              Testimonials
            </span>
            <h2 className="text-white text-4xl lg:text-6xl font-bold lg:font-extrabold leading-10 lg:leading-[61.60px] mb-11">
              <span className="relative inline-block">
                <span className="absolute left-[2px] bottom-0 lg:-bottom-[2px] w-full h-1 lg:h-1.5 bg-purple-400 z-0"></span>
                <span className="relative z-10">Bigapp</span>
              </span>{" "}
              got to the next level
            </h2>
            <a
              href="#case-study"
              aria-label="View Bigapp case study"
              className="inline-flex items-center gap-4 text-white text-base font-medium leading-normal tracking-wide hover:text-purple-400 transition-colors duration-300 group"
            >
              <span>View Case Study</span>
              <img
                src={arrowRight}
                alt=""
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-auto">
            <div className="overflow-hidden rounded-[50px] shadow-2xl">
              <img
                src={mobile}
                alt="Bigapp mobile application interface showcase"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-auto lg:max-w-96">
            <blockquote className="mb-4">
              <p className="text-white text-lg font-normal leading-7">
                “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
                viverra orci dui consequat turpis scelerisque faucibus.”
              </p>
            </blockquote>
            <div className="flex items-center gap-4">
              <img
                src={userAvatar}
                alt="Rwanda Melflor profile"
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="text-white text-lg font-normal leading-7">
                  Rwanda Melflor
                </p>
                <p className="text-white text-base font-normal leading-snug">
                  Co-founder Bigapp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
