import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import DNA from '@/images/logos/DNA.png'
import planner from '@/images/logos/planner.png'
import HelloCurioLogo from '@/images/logos/HelloCurioLogo.png'
import palindrome from '@/images/logos/palindrome.png'
import CurrenCitylogo from '@/images/logos/CurrenCitylogo.svg'

const projects = [
  {
    name: 'CurrenCity',
    description:
      'Get real-time information about a city you want to visit, including the 5-day weather forecast, a live map from Google Maps, and the current currency exchange rate',
    link: { href: 'https://github.com/caseygirlyn/CurrenCity', label: 'github.com' },
    logo: CurrenCitylogo,
    techStack: ['JavaScript', 'Google Places API', 'Bootstrap', 'Day JS' ],
  },
  {
    name: 'Website Redesign',
    description:
      'Website redesign and optimisation for a meditech company.',
    link: { href: '#', label: 'CC-Diagnostics' },
    logo: DNA,
    techStack: ['Next.js', 'Tailwind CSS', 'JavaScript', 'Airtable','Figma'],
  },
  {
    name: 'HelloCurio',
    description:
      'An app to explore different countries. Utilizing JavaScript logic, APIs, and data arrays.',
    link: { href: 'https://github.com/Niamh-Codes/tech_titans', label: 'github.com' },
    logo: HelloCurioLogo,
    techStack: ['React + Vite', 'Framer Motion', 'Tailwind CSS', 'UI Verse','JavaScript', '3rd party APIs'],
  },
  {
    name: 'Planner',
    description:
      'A planner that utilises DayJS librarys to create an editable planner, using local storage on your device to display inputted values.',
    link: { href: 'https://github.com/KrystleMurphy/Planner', label: 'github.com' },
    logo: planner,
    techStack: ['Day JS', 'JQuery','JavaScript'],
  },
  {
    name: 'Palindrome Checker',
    description:
      'Implementing javascript logic to check if a user inputted word is a palindrome',
    link: { href: 'https://github.com/KrystleMurphy/palindrome', label: 'github.com' },
    logo: palindrome,
    techStack: ['JavaScript'],
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'A collection of projects that highlight my skills and expertise. Explore the code, and if something sparks your interest, consider contributing your ideas for enhancement.',
};


export default function Projects() {
  return (
    <SimpleLayout
title="Projects"
intro="I've built a variety of projects that showcase my knowledge. If something catches your eye, feel free to explore the code and contribute your ideas for improvements."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <ul className="mt-4 ml-4 z-10 list-disc text-sm text-zinc-600 dark:text-zinc-400 group-hover:block">
              {project.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
