import arrowRight from "../assets/icon/arrow-right.svg";
import shapes from "../assets/customers/shapes.svg";

function Customers() {
  return (
    <section className="container py-12 lg:py-20">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-y-12 lg:gap-x-20">
        <div className="w-auto lg:max-w-[800px] text-center lg:text-start">
          <span className="block text-slate-950 dark:text-white text-xl font-bold uppercase leading-tight tracking-[3px] mb-4">
            Customers
          </span>
          <h2 className="text-slate-950 dark:text-white text-4xl lg:text-7xl font-bold lg:font-extrabold leading-10 lg:leading-[79.20px] mb-8">
            <span className="text-purple-400">Target</span>{" "}
            <span className="relative inline-block">
              <span className="absolute w-10 h-10 lg:w-20 lg:h-20 bg-pink-700 -left-1 top-0 lg:-left-3 lg:top-0 -z-10"></span>
              customers
            </span>{" "}
            with our powerful AI kit
          </h2>
          <p className="w-auto lg:max-w-[600px] text-slate-950 dark:text-white text-base lg:text-lg font-normal leading-snug lg:leading-7 mb-12">
            Scelerisque auctor dolor diam tortor, fames faucibus non interdum
            nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
            adipiscing lacinia.
          </p>
          <a
            href="#works"
            aria-label="Learn how customer targeting works"
            className="inline-flex items-center gap-4 text-slate-950 dark:text-white text-xl font-medium leading-normal tracking-wide hover:text-purple-400 dark:hover:text-purple-400 transition-colors duration-300 group"
          >
            <span>How Targeting Customers Works</span>
            <img
              src={arrowRight}
              alt=""
              aria-hidden="true"
              className="group-hover:translate-x-1 transition-transform duration-300 invert dark:invert-0"
            />
          </a>
        </div>

        <div className="flex-shrink-0 w-56 lg:w-auto">
          <img
            src={shapes}
            alt="Geometric squares illustration representing customer segmentation"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Customers;
