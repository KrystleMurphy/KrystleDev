import React from 'react';
import { motion } from 'framer-motion';
import ContactButton from '../Common/ContactButton';
import CV from '../About/assets/CV.pdf';
import { DocumentIcon } from '@heroicons/react/24/outline';

const links = [
  { name: 'Portfolio', href: '/portfolio' },
  // { name: 'Case Study', href: '#' },
];

const stats = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/krystlemurphy',
    icon: (props) => (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-cyan-600"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.19 20.45h-3v-9h3v9zm-1.5-10.29c-.97 0-1.76-.79-1.76-1.76s.79-1.76 1.76-1.76 1.76.79 1.76 1.76-.79 1.76-1.76 1.76zm13.44 10.29h-3v-4.83c0-1.15-.03-2.63-1.6-2.63-1.6 0-1.84 1.25-1.84 2.54v4.92h-3v-9h2.88v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.55v5.76z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://www.github.com/krystlemurphy',
    icon: (props) => (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-cyan-600"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'CV',
    href: CV,
    icon: (props) => <DocumentIcon {...props} className="h-6 w-6 text-cyan-600" />,
  },
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Adjust the delay between each child animation
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
              variants={fadeInVariants}
            >
              Welcome to <span className="text-cyan-600 font-SpecialElite">Krystle.Dev</span>
            </motion.h2>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-300"
              variants={fadeInVariants}
            >
              I’m Krystle, a Front-End Web Developer and founder of{' '}
              <span className="text-cyan-600 font-SpecialElite">Krystle.Dev</span>{' '}
              in Warwick, UK. For websites where every detail is meticulously crafted
              through a collaborative process, resulting in bespoke, responsive
              websites that deliver an exceptional user experience.
            </motion.p>
            {/* <motion.div
              className="mt-8"
              variants={fadeInVariants}
            >
              <figure className="border-l border-cyan-600 pl-8">
                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-slate-300">
                  <p>Like the sound of what we do?</p>
                </blockquote>
                <ContactButton />
              </figure>
            </motion.div> */}
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <motion.a key={link.name} href={link.href} variants={fadeInVariants}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </motion.a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div key={stat.name} className="flex flex-col-reverse" variants={fadeInVariants}>
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  <a href={stat.href} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-500">
                    {stat.icon({})}
                  </a>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
