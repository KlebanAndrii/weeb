import arrowPurple from "../assets/icon/arrow-purple.svg";
import horse from "../assets/events/picture-01.jpg";
import music from "../assets/events/picture-02.jpg";
import happy from "../assets/events/picture-03.jpg";
import EventCard from "../components/common/EventCard";

const events = [
  {
    id: 1,
    category: "Design Thinking",
    title: "Wild Horse Event",
    image: horse,
    slug: "wild-horse-event",
    arrowPurple: arrowPurple,
  },
  {
    id: 2,
    category: "Festival",
    title: "Music & Colors",
    image: music,
    slug: "music-and-colors",
    arrowPurple: arrowPurple,
  },
  {
    id: 3,
    category: "Bootcamp",
    title: "Happy Father's Day",
    image: happy,
    slug: "happy-fathers-day",
    arrowPurple: arrowPurple,
  },
];


function Events() {
  return (
    <section className="bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <div className="container py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row text-center items-center lg:justify-between gap-6 mb-9 lg:mb-6">
          <h2 className="text-4xl lg:text-6xl font-bold lg:font-extrabold leading-10 lg:leading-[61.60px]">
            Design events near your
          </h2>
          <a
            href="#"
            aria-label="Explore all design events"
            className="flex-shrink-0 flex items-center gap-4 group"
          >
            <span className="text-purple-600 hover:text-purple-400 text-base font-medium leading-normal tracking-wide">
              Explore Events
            </span>
            <img src={arrowPurple} alt="" aria-label="true" className="group-hover:translate-x-1 transition-transform duration-300"/>
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-x-6">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Events;