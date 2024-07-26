import ContactButton from "../Common/ContactButton";


const navigation = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/krystlemurphy',
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
  {
    name: 'GitHub',
    href: 'https://www.github.com/krystlemurphy',
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
];

export default function Home() {
  return (
    <div className="overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg p-8 bg-slate-50/40 rounded-md">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to <span className="text-cyan-600 font-SpecialElite">Krystle.Dev</span></h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
            I’m Krystle, a Front-end designer based in Warwick, UK. Founder of <span className="text-cyan-600 font-SpecialElite">Krystle.Dev</span>, developing bespoke websites using cutting edge technology.
            </p>


            <p className="mt-6 mb-6 text-base leading-7 text-gray-600">
       Get in touch to see what we can do for you!
            </p>
            <div className="flex justify-left space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-500">
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="h-6 w-6" />
            </a>
          ))}
        </div>
 <ContactButton/>
          </div>
        </div>
      </div>
    </div>
  )
}
