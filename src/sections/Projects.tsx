import progressionDexPage from "@/assets/images/progressiondex-landing-page.png";
import illumicheckPage from "@/assets/icons/Illumicheck_mac.png";
import regexorcistPage from "@/assets/icons/RegExorcist_mac.png";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import Image from "next/image";

const portfolioProjects = [
  {
    year: "2024",
    title: "Progression Dex",
    results: [
      { title: "Built a seamless progression tracker." },
      { title: "Designed for easy navigation" },
      { title: "Focused on feature enhancements" },
    ],
    link: "https://www.progressiondex.com",
    image: progressionDexPage,
  },
  {
    year: "2024",
    title: "Illumicheck",
    results: [
      { title: "Built a seamless progression tracker." },
      { title: "Designed for easy navigation" },
      { title: "Focused on feature enhancements" },
    ],
    link: "https://github.com/yasingunaydiin/Illumicheck", /* Change to its own landing page */
    image: illumicheckPage,
  },
  {
    year: "2024",
    title: "Regexorcist",
    results: [
      { title: "Built a seamless progression tracker." },
      { title: "Designed for easy navigation" },
      { title: "Focused on feature enhancements" },
    ],
    link: "https://github.com/yasingunaydiin/RegExorcist", /* Change to its own landing page */
    image: regexorcistPage,
  },
];

export const ProjectsSection = () => {
  return <section className="pb-16 lg:py-28"> 
    <div className="container">
      <h2 className="text-3xl text-center md:text-5xl mt-6">Featured Projects</h2>
      <p className="text-base text-center md:text-2xl mt-3">Projects I have created to satisfy needs.</p>
      <div className="mt-5 md:mt-10 flex flex-col gap-14">
        {portfolioProjects.map((project, index) =>(
           <div key={project.title} className="rounded-3xl z-0 overflow-hidden bg-white after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-black/25 px-8 pt-8 md:pt-12 md:px-10 after:pointer-events-none lg:pt-16 lg:px-20 sticky"
           style={{
            top: `calc(64px + ${index * 40}px` /* Stacking cards */
           }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
              <span>{project.year}</span>
              </div>
            <h3 className="text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
            <hr className="border-t-2 border-black/5 mt-4" />
            <ul className="flex flex-col gap-2 mt-4 md:mt-5">
              {project.results.map((result) => (
                <li className="flex gap-2 text-sm md:text-base">
                  <CheckCircleIcon className="size-5 md:size-6"/>
                  <span>{result.title}</span>
                </li>
              ))}
            </ul>
            <a href="{project.link}">
            <button className="border border-black/15 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-8">
              <span>Visit Live Site</span>
              <ArrowUpRightIcon className="size-4" />
              </button>
            </a>
            </div>
            <div>
            <Image
                    src={project.image}
                    alt={project.title}
                    className={`mt-5 -mb-2 mx-auto md:-mb-5 lg:mt-0 lg:absolute ${
                      index === 1 || index === 2 ? "lg:w-3/5 lg:h-auto lg:relative md:mb-5 mb-5" : "lg:h-full lg:w-auto"
                    }`} // First image full-size, second and third smaller
                  />
                </div>
            </div>
           </div>
        ))}
      </div>
    </div>
  </section>;
};