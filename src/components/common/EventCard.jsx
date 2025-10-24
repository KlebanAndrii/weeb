function EventCard({ category, title, image, slug, arrowPurple }) {
  return (
    <article className="mb-8">
      <a
        href={`#event/${slug}`}
        className="block mb-6 relative overflow-hidden group"
      >
        <span className="absolute left-4 top-4 bg-purple-100 text-purple-800 text-sm font-normal py-[2px] px-2 rounded z-10">
          {category}
        </span>
        <img
          src={image}
          alt={`${title} event`}
          className="w-full aspect-[410/220] object-cover rounded-[5px] transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </a>

      <div>
        <span className="block text-base font-medium leading-none mb-1">
          {category}
        </span>
        <h3 className="text-2xl lg:text-4xl font-bold leading-relaxed lg:leading-10 mb-7 hover:text-purple-400">
          <a href={`#event/${slug}`}>{title}</a>
        </h3>
        <a
          href={`#event/${slug}/tickets`}
          className="flex gap-4 text-base font-medium leading-normal tracking-wide transition-all duration-300 group/cta"
        >
          <span className="text-purple-600 hover:text-purple-400 text-base font-medium leading-normal tracking-wide">
            Buy Tickets
          </span>
          <img
            src={arrowPurple}
            alt=""
            aria-label="true"
            className="group-hover/cta:translate-x-1 transition-transform duration-300"
          />
        </a>
      </div>
    </article>
  );
}

export default EventCard;
