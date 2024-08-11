import CTA from "./components/CTA";
import CCD from './assets/CCD.jpg';
import currenCity from './assets/currenCity.jpg';
import HC from './assets/HC.jpg';
import { motion } from 'framer-motion';

const groupProjects = [
  {
    name: 'CC-Diagnostics',
    Description: 'Website re-design, this is a current project I am working on, we are a team of 3 interns undertaking a re-design of the existing website to meet the needs of the evolving business.',
    image: CCD,
    URL: "https://cc-diagnostics.netlify.app/"
  },
  {
    name: 'CurrenCity',
    Description: 'A travel app generating weather, currency conversion, places of interest. A group project utlising google maps API.',
    image: currenCity,
    URL: "https://caseygirlyn.github.io/CurrenCity/"
  },
  {
    name: 'Hello Curio',
    Description: 'Translation, fact & quiz app. A group project using Framer Motion, and linking custom arrays with external APIs.',
    image: HC,
    URL: "https://hellocurio.netlify.app/"
  },
];

export default function Portfolio() {
  return (
    <motion.div 
    className="relative isolate px-6 py-24 sm:py-32 lg:px-8"
    initial={{ opacity: 0 }}  // Initial opacity
    animate={{ opacity: 1 }}   // Final opacity
    transition={{ duration: 1 }} // Duration of the fade-in
  >
        <CTA />
      <div className="mx-auto py-24 max-w-7xl px-6 lg:px-8 p-8 rounded-md">
        <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {groupProjects.map((project) => (
            <li key={project.name}>
              <a href={project.URL} target="_blank" rel="noopener noreferrer">
                <img alt={project.name} src={project.image} className="aspect-[3/2] w-full rounded-2xl object-cover shadow-xl hover:shadow-2xl" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-cyan-600">{project.name}</h3>
              <p className="text-base leading-7 text-slate-400">{project.Description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      </motion.div>
  );
}
