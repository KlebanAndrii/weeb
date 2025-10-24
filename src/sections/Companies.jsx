import smartFinder from "../assets/companies/smart-finder.svg";
import zoomerr from "../assets/companies/zoomerr.svg";
import shells from "../assets/companies/shells.svg";
import waves from "../assets/companies/waves.svg";
import artVenue from "../assets/companies/art-venue.svg";

const companies = [
  { name: "Smart Finder", logo: smartFinder },
  { name: "Zoomerr", logo: zoomerr },
  { name: "Shells", logo: shells },
  { name: "Waves", logo: waves },
  { name: "Art Venue", logo: artVenue },
];

function Companies() {
  return (
    <section className="container pt-4 pb-12 lg:py-20">
      <div className="flex flex-col gap-12 lg:gap-20">
        <h2 className="text-center text-slate-950 dark:text-white text-4xl lg:text-6xl font-bold lg:font-extrabold leading-10 lg:leading-[61.60px]">
          Join Leading Companies
        </h2>
        <div className="flex justify-center items-center gap-x-6 lg:gap-x-20 gap-y-6 flex-wrap">
          {companies.map((company) => (
            <div key={company.name}>
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="invert dark:invert-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companies;
