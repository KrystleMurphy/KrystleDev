import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About Krystle Murphy - Software Developer',
  description:
    'I’m Krystle Murphy, a dedicated Software Developer based in Warwick, UK. I specialize in creating responsive and engaging digital experiences using HTML, CSS, JavaScript, and React. Committed to continuous improvement and passionate about delivering impactful results.',
};


export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
    I’m Krystle Murphy, a dedicated Software Developer based in Warwick, UK.
  </h1>
  <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
    <p>
      I’m a proactive and committed developer who believes in putting in the hard work to achieve impactful results. I pride myself on being a productive team member, always ready to roll up my sleeves and tackle challenges head-on. My goal is to provide exceptional value to any team, making me an excellent return on investment.
    </p>
    <p>
      With a solid foundation in HTML, CSS, JavaScript, and React, I bring both technical knowledge and a passion for continuous improvement to every project. I’m eager to apply my coding skills in a dynamic environment where I can further hone my craft and contribute to meaningful digital experiences.
    </p>
    <p>
      Currently, I’m expanding my skill set by taking the Python and Apps course with Code First Girls, demonstrating my commitment to continuous learning and staying at the forefront of technology. I’m always on the lookout for opportunities to grow and evolve as a developer, embracing every new challenge as a chance to learn and improve.
    </p>
    <p>
      Whether it’s collaborating with cross-functional teams or independently diving into code, I thrive on turning ideas into functional, user-friendly interfaces. My journey from teaching and leadership roles into web development has equipped me with a unique perspective and a versatile skill set that adds value to any project.
    </p>
  </div>
</div>

        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink> */}
            <SocialLink href="https://github.com/KrystleMurphy" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/krystlemurphy/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:KrystleLKirby@aol.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              KrystleLKirby@aol.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
