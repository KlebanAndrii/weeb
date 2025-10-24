import desktopImg from "../assets/hero/desktop.svg";

function Hero() {
  return (
    <section className="container py-12 lg:py-20">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-center text-slate-950 dark:text-white text-6xl lg:text-7xl font-extrabold leading-[61.60px] lg:leading-[79.20px]">
          Design{" "}
          <span className="relative inline-block">
            Faster{" "}
            <span className="hidden sm:flex absolute left-1 bottom-0 lg:bottom-1 w-[calc(100%-15px)] h-1.5 bg-purple-400"></span>
          </span>{" "}
          <span className="text-purple-600">&</span>{" "}
          <span className="relative inline-block">
            <span className="absolute left-1.5 top-2 lg:top-3.5 w-[calc(100%-7px)] h-1.5 sm:h-2 bg-purple-400 z-0"></span>
            <span className="relative z-10">Better</span>
          </span>
        </h1>
        <div className="w-auto lg:max-w-3xl text-slate-950 dark:text-white text-base lg:text-lg font-normal text-center">
          <p>
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet, dui sit suspendisse.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#signup"
            aria-label="Join our platform now"
            className="px-10 py-3 rounded-lg bg-purple-600 text-center text-white font-medium text-xl tracking-wide hover:bg-purple-400 transition-colors duration-300 ease-in-out"
          >
            Join Now
          </a>
          <a
            href="#demo"
            aria-label="View platform demo"
            className="px-8 py-3 rounded-lg text-center text-xl font-medium tracking-wide text-slate-950 dark:text-white ring-1 ring-slate-950 dark:ring-white hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 ease-in-out"
          >
            View Demo
          </a>
        </div>
      </div>
      <div className="pt-12 lg:pt-20 px-0 lg:px-20">
        <img
          src={desktopImg}
          alt="Desktop dashboard preview"
          className="w-full rounded-[20px] shadow-2xl"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Hero;
