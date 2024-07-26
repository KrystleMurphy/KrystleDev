import { CloudArrowUpIcon, SwatchIcon, ServerIcon, ChatBubbleOvalLeftIcon, RocketLaunchIcon, WrenchScrewdriverIcon} from '@heroicons/react/20/solid'
import { BugAntIcon } from '@heroicons/react/24/solid'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'
import { PaintBrushIcon } from '@heroicons/react/24/solid'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { WindowIcon } from '@heroicons/react/24/solid'
import ContactButton from '../Common/ContactButton'

export default function Services() {
  return (
      <div className="relative isolate px-6 py-32 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-slate-50/40 p-8 rounded-md">
        <div className="mx-auto max-w-2xl lg:mx-0 ">
          <p className="text-lg font-semibold leading-8 tracking-tight text-cyan-600">Services</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A Client-Centered Approach</h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
          Welcome to <span className="text-cyan-600 font-SpecialElite">Krystle.Dev</span>, where your vision transforms into a stunning digital reality! Our multi-stage design process ensures that every detail is meticulously crafted to meet your unique needs. Collaboration is at the heart of our approach, working closely with you every step of the way to ensure your input shapes the final product. The result? A bespoke, responsive design that not only looks incredible but utilises cutting edge technology to deliver an exceptional user experience. Let’s create something amazing together at <span className="text-cyan-600 font-SpecialElite">Krystle.Dev</span>!
          </p>
          {/* <div className='lg:hidden'>
          <ContactButton/>
          </div> */}
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
    
            <figure className="border-l border-cyan-600 pl-8">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>
                  Like the sound of what we do?
                </p>
              </blockquote>
              <ContactButton />
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>
              Our process
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <ChatBubbleLeftRightIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-cyan-600" />
                <span>
                  <strong className="font-semibold text-gray-900">Initial Consultation</strong> We start by meeting with you to discuss the project scope, understand your vision, and identify your business needs. Then, we analyze your industry, competitors, and target audience to gather insights that will inform our design strategy.
                </span>
              </li>
              <li className="flex gap-x-3">
                <WindowIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-cyan-600" />
                <span>
                  <strong className="font-semibold text-gray-900">Sitemap and Wireframes</strong> We create a sitemap to outline your website's structure and wireframes to visualize the layout of key pages. A sitemap ensures logical content organization, while wireframes provide a basic layout to plan the user experience and functionality.
                </span>
              </li>
              <li className="flex gap-x-3">
                <SwatchIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-cyan-600" />
                <span>
                  <strong className="font-semibold text-gray-900">Concept Development</strong> We develop initial design concepts based on your brand identity, color schemes, and typography preferences.
                </span>
              </li>
              <li className="flex gap-x-3">
                <PaintBrushIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-cyan-600" />
                <span>
                  <strong className="font-semibold text-gray-900">Mockups</strong> We create detailed mockups of key pages to give you a realistic preview of your website's look and functionality. After presenting these mockups, we gather your feedback and make revisions to ensure the design aligns with your vision.
                </span>
              </li>
              <li className="flex gap-x-3">
                <WrenchScrewdriverIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-cyan-600" />
                <span>
                  <strong className="font-semibold text-gray-900">Development and Content Integration</strong> Our developers turn the design into a live website using HTML, CSS, and JavaScript, creating a responsive and interactive interface. We then add your content—text, images, and videos—ensuring everything is properly formatted and visually appealing.
                </span>
              </li>
              <li className="flex gap-x-3">
                <BugAntIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-cyan-600" />
                <span>
                  <strong className="font-semibold text-gray-900">Functionality Testing</strong> We test all features to ensure they function correctly, checking your website on various browsers and devices for consistent appearance and performance. We also optimize its speed and performance for a fast, smooth user experience.
                </span>
              </li>
              <li className="flex gap-x-3">
                <RocketLaunchIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-cyan-600" />
                <span>
                  <strong className="font-semibold text-gray-900">Deployment</strong> We deploy your website to the live server for a smooth transition from development. After a final review to address any last-minute issues, we provide training on managing and updating your site, along with all necessary documentation and support.
                </span>
              </li>
            </ul>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Why Choose <span className="text-cyan-600 font-SpecialElite">Krystle.Dev</span>?</h2>
            <p className="mt-6">
            Choosing our web design services means you benefit from a comprehensive, professional approach that guarantees high-quality results. We prioritise your vision and goals, ensuring the final product aligns with your expectations. Throughout the entire process, we keep you informed and involved, ensuring transparency and collaboration every step of the way.
            </p>
            <div className=''>
          <ContactButton/>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
