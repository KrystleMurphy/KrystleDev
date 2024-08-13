import headshot from './assets/headshot.jpg';
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mvoeqbbg");
  const navigate = useNavigate();

  const handleDismiss = () => {
    navigate('/');
  };

  return (
    <>
      <title>Contact Krystle Murphy | Front-End Developer in Warwick</title>
      <meta name="description" content="Get in touch with Krystle Murphy, a front-end web developer based in Warwick. Discuss your project and let's create a stunning website together." />

      <motion.div 
        className="relative isolate px-6 py-24 sm:py-32 lg:px-8"
        initial={{ opacity: 0 }}  // Initial opacity
        animate={{ opacity: 1 }}   // Final opacity
        transition={{ duration: 1 }} // Duration of the fade-in
      >
        <div className="mx-auto max-w-xl lg:max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-300">Contact Krystle Murphy</h1>
          <h2 className="text-4xl font-bold tracking-tight text-slate-300">Let’s talk about your project</h2>
          <p className="mt-2 text-lg leading-8 text-slate-400">
            Build your custom website
          </p>
          <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <form onSubmit={handleSubmit} className="lg:flex-auto">
              {state.succeeded ? (
                <div className="rounded-md bg-green-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircleIcon aria-hidden="true" className="h-5 w-5 text-green-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">Thanks! Your enquiry has been successfully submitted!</p>
                    </div>
                    <div className="ml-auto pl-3">
                      <div className="-mx-1.5 -my-1.5">
                        <button
                          type="button"
                          className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                          onClick={handleDismiss}
                        >
                          <span className="sr-only">Dismiss</span>
                          <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-slate-400">
                        First name
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-slate-400">
                        Last name
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="last-name"
                          name="last-name"
                          type="text"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold leading-6 text-slate-400">
                        Budget
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="budget"
                          name="budget"
                          type="text"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-semibold leading-6 text-slate-400">
                        Current Website URL
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="website"
                          name="website"
                          type="url"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-400">
                        Message
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                          defaultValue={''}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-slate-950 shadow-sm hover:bg-cyan-500 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                    >
                      Let’s talk
                    </button>
                  </div>
                </>
              )}
            </form>
            <div className="lg:mt-6 lg:w-80 lg:flex-none">
              <figure className="mt-10">
                <blockquote className="text-lg font-semibold leading-8 text-slate-400">
                  <p>
                    Ready to turn your vision into a digital masterpiece? Reach out now and let’s explore the possibilities with <span className="text-cyan-600 font-SpecialElite">Krystle.Dev</span> and watch your vision come to life!
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex gap-x-6">
                  <img
                    alt="Krystle Murphy, Front-End Developer"
                    src={headshot}
                    className="h-12 w-12 flex-none rounded-full bg-gray-50 object-cover"
                  />
                  <div>
                    <div className="text-base font-semibold text-slate-400">Krystle</div>
                    <div className="text-sm leading-6 text-slate-600"><span className="text-cyan-600 font-SpecialElite">Krystle.Dev</span></div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </motion.div>

      <script type="application/ld+json">
      {`{
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Krystle Murphy",
        "jobTitle": "Front-End Developer",
        "url": "https://krystle.dev",
        "image": "${headshot}", // Use a proper image URL
        "sameAs": [
          "https://twitter.com/yourprofile",
          "https://linkedin.com/in/yourprofile"
        ]
      }`}
      </script>
    </>
  );
}
