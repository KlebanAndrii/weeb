import desktop from '../assets/speed/desktop.svg'

function Speed() {
  return (
    <section className="container py-12 lg:py-20">
      <div className="flex flex-col-reverse lg:flex-row gap-y-12 lg:gap-x-20 items-center ">
        <div className="w-auto lg:max-w-[450px] lg:text-start text-center">
          <span className="block text-slate-950 dark:text-white text-xl font-bold uppercase leading-tight tracking-[3px] mb-4">
            Speed
          </span>
          <h2 className="text-slate-950 dark:text-white text-4xl lg:text-6xl font-bold lg:font-extrabold leading-10 lg:leading-[61.60px] mb-8">
            Work fast, w/o interruptions
          </h2>
          <p className="text-slate-950 dark:text-white text-base lg:text-lg font-normal leading-snug lg:leading-7">
            Scelerisque auctor dolor diam tortor, fames faucibus non interdum
            nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
            adipiscing lacinia.
          </p>
        </div>
        <div className="w-auto">
          <img
            src={desktop}
            alt="Desktop dashboard small preview"
            loading="lazy"
            className="w-full h-auto rounded-[20px] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Speed