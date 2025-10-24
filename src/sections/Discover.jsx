import arrowRight from "../assets/icon/arrow-right.svg";
import shapes from "../assets/discover/shapes.svg";

function Discover() {
  return (
    <section className="container py-12 lg:py-20">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-y-12 lg:gap-x-20">
        <div className="w-auto lg:max-w-[800px] text-center lg:text-start">
          <span className="block text-slate-950 dark:text-white text-xl font-bold uppercase leading-tight tracking-[3px] mb-4">
            Discover
          </span>

          <h2 className="text-4xl lg:text-7xl font-bold lg:font-extrabold leading-10 lg:leading-leading-[79.20px] text-slate-950 dark:text-white mb-8">
            <span className="text-purple-400">Unlimited</span>{" "}
            <span className="relative inline-block">
              <span className="absolute w-[86px] lg:w-[170px] h-11 lg:h-20 -left-1.5 lg:-left-3 -top-1 lg:-top-1.5 border-[3px] lg:border-[5px] border-orange-700 -z-10"></span>
              ideas
            </span>{" "}
            for your next great projects
          </h2>
          <p className="w-auto lg:max-w-[600px] text-slate-950 dark:text-white text-base lg:text-lg font-normal mb-12 leading-7">
            Scelerisque auctor dolor diam tortor, fames faucibus non interdum
            nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
            adipiscing lacinia.
          </p>
          <a
            href="#discover"
            className="inline-flex items-center gap-4 text-slate-950 dark:text-white text-xl font-medium leading-normal tracking-wide hover:text-purple-400 dark:hover:text-purple-400 transition-colors duration-300 group"
            aria-label="Discover more ideas"
          >
            <span>Discover Ideas</span>
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
            alt="Colorful geometric shapes illustration"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Discover;
