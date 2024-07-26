export default function CTA() {
    return (
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Collaborative Projects</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Take a look around - we are passionate about what we do and dedicated to quality results.
          </p>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-12 lg:flex-shrink-0">
          <a
                href="#"
                className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-slate-50 shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                Contact <span aria-hidden="true">&rarr;</span>
              </a>
          </div>
        </div>
        </div>
    )
  }
  