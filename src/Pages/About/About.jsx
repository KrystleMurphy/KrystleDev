
import { DocumentArrowDownIcon } from '@heroicons/react/24/solid';
import ContactButton from '../Common/ContactButton';
import CV from '../About/assets/CV.pdf'

const cards = [
  {
    name: 'Open CV',
    description: 'Open CV',
    icon: DocumentArrowDownIcon,
    href: CV
  },
  {
    name: 'GitHub',
    description: 'View my GitHub profile',
    href: 'https://github.com/krystlemurphy',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Linked In',
    description: 'Connect on Linkedin',
    href: 'https://www.linkedin.com/krystlemurphy',
icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.19 20.45h-3v-9h3v9zm-1.5-10.29c-.97 0-1.76-.79-1.76-1.76s.79-1.76 1.76-1.76 1.76.79 1.76 1.76-.79 1.76-1.76 1.76zm13.44 10.29h-3v-4.83c0-1.15-.03-2.63-1.6-2.63-1.6 0-1.84 1.25-1.84 2.54v4.92h-3v-9h2.88v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.55v5.76z"
            clipRule="evenodd"
          />
        </svg>
        ),
  },
];

export default function About() {
  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:mx-0 bg-slate-50/40 p-8 rounded-md">
          <h2 className="text-4xl font-bold text-black sm:text-3xl">About <span className="text-cyan-600 font-SpecialElite">Krystle.Dev</span></h2>
          <p className="mt-6 text-md leading-8 text-black">
          Graduating from the University of Birmingham with a Trilogy Certificate in Front-End Design, I combine academic insight with practical experience. With a solid foundation in JavaScript and React, I craft dynamic, responsive user interfaces that leave a lasting impression. By integrating popular libraries and frameworks such as Bootstrap, Tailwind, jQuery, and DayJS, I ensure your projects leverage the latest web development technologies. My skills in utilizing third-party APIs enhance site functionality, while proficiency with NodeJS and NPM streamlines package management. Competent use of Git supports effective version control and collaboration. Known for relentless problem-solving and adaptability, I consistently deliver high-quality results with proven communication and teamwork skills.
          </p>
          <ContactButton/>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
  {cards.map((card) => (
      <a key={card.name} href={card.href} target="_blank" rel="noopener noreferrer" className="text-black ">
        <span className="sr-only">{card.name}</span>
    <div key={card.name} className="flex gap-x-4 rounded-xl bg-slate-50/40 p-6 ring-1 ring-inset ring-slate-50/50 hover:text-cyan-600">
        <card.icon aria-hidden="true" className="h-7 w-5 flex-none" />
      <div className="text-base leading-7">
        <h3 className="font-semibold">{card.name}</h3>
        {/* <p className="mt-2 text-black">{card.description}</p> */}
      </div>
    </div>
      </a>
  ))}
</div>

      </div>
    </div>
  );
}
