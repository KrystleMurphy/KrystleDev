import { 
  CloudArrowUpIcon, 
  SwatchIcon, 
  ServerIcon, 
  ChatBubbleOvalLeftIcon, 
  RocketLaunchIcon, 
  WrenchScrewdriverIcon 
} from '@heroicons/react/20/solid';
import { 
  BugAntIcon, 
  ChatBubbleLeftRightIcon, 
  PaintBrushIcon, 
  CheckBadgeIcon, 
  WindowIcon 
} from '@heroicons/react/24/solid';
import ContactButton from '../Common/ContactButton';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <>
      {/* Schema Markup for Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Web Development Services",
          "provider": {
            "@type": "Organization",
            "name": "Krystle.Dev",
            "url": "https://krystle.dev",
            "logo": "https://krystle.dev/assets/favicon-32x32-D8jAM9-6.png",
            "sameAs": [
              "https://www.linkedin.com/in/krystlemurphy",
              "https://www.github.com/krystlemurphy"
            ]
          },
          "description": "Comprehensive web development services including consultation, design, development, and deployment."
        })}
      </script>

      <motion.div 
        className="relative isolate px-6 py-32 sm:py-32 lg:px-8"
        initial={{ opacity: 0 }}  // Initial opacity
        animate={{ opacity: 1 }}   // Final opacity
        transition={{ duration: 1 }} // Duration of the fade-in
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 p-8 rounded-md">
          <div className="mx-auto max-w-2xl lg:mx-0 ">
            <p className="text-lg font-semibold leading-8 tracking-tight text-cyan-600">Services</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-300 sm:text-4xl">Our Processes</h1>
            <p className="mt-6 text-xl leading-8 text-slate-400">
              At <span className="text-cyan-600 font-SpecialElite">Krystle.Dev</span>, we transform your vision into a stunning digital reality through our comprehensive web development process. Each stage is meticulously crafted to meet your unique needs, ensuring exceptional user experiences through collaboration and innovative design.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
              <figure className="border-l border-cyan-600 pl-8">
                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-slate-300">
                  <p>
                    Like the sound of what we do?
                  </p>
                </blockquote>
                <ContactButton />
              </figure>
            </div>
            <div className="max-w-xl text-base leading-7 text-slate-400 lg:col-span-7">
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-slate-400">
                <li className="flex gap-x-3">
                  <ChatBubbleLeftRightIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-cyan-600" />
                  <span>
                    <strong className="font-semibold text-slate-300">Initial Consultation</strong> We start by meeting with you to discuss the project scope, understand your vision, and identify your business needs. This includes analyzing your industry, competitors, and target audience to gather insights that will inform our design strategy.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <WindowIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-cyan-600" />
                  <span>
                    <strong className="font-semibold text-slate-300">Sitemap and Wireframes</strong> We create a sitemap to outline your website's structure and wireframes to visualize the layout of key pages. This ensures logical content organization and a planned user experience.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <SwatchIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-cyan-600" />
                  <span>
                    <strong className="font-semibold text-slate-300">Concept Development</strong> We develop initial design concepts based on your brand identity, color schemes, and typography preferences to create a cohesive look and feel for your website.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <PaintBrushIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-cyan-600" />
                  <span>
                    <strong className="font-semibold text-slate-300">Mockups</strong> We create detailed mockups of key pages to give you a realistic preview of your website's look and functionality. Your feedback is essential for us to ensure the design aligns with your vision.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <WrenchScrewdriverIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-cyan-600" />
                  <span>
                    <strong className="font-semibold text-slate-300">Development and Content Integration</strong> Our developers turn the design into a live website using HTML, CSS, and JavaScript, ensuring a responsive and interactive interface with well-integrated content.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BugAntIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-cyan-600" />
                  <span>
                    <strong className="font-semibold text-slate-300">Functionality Testing</strong> We rigorously test all features to ensure they function correctly, optimizing speed and performance for a fast, smooth user experience across various devices and browsers.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <RocketLaunchIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-cyan-600" />
                  <span>
                    <strong className="font-semibold text-slate-300">Deployment</strong> We deploy your website to the live server for a seamless transition from development. After a final review and necessary training, we ensure you are equipped to manage your new site.
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-300">Why Choose <span className="text-cyan-600 font-SpecialElite">Krystle.Dev</span>?</h2>
              <p className="mt-6">
                Choosing our web development services means you benefit from a comprehensive, professional approach that guarantees high-quality results. We prioritize your vision and goals, ensuring that the final product aligns with your expectations while keeping you informed and involved throughout the entire process.
              </p>
              <div className=''>
                <ContactButton />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
