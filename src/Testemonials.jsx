import craigHolmes from '../public/craigHolmes.jpeg'
import richTimmis from '../public/richTimmis.jpeg'

const testimonials = [
    {
      body: 'Krystle has an eye for detail and is committed to quality outcomes',
      author: {
        name: 'Craig Holmes',
        handle: 'Director, Coventry Arts',
        imageUrl: craigHolmes,
      },
    },
    {
      body: 'Krystle has a positve solutioned focused approach. Her collaboration skills ensure excellent outcomes',
      author: {
        name: 'Rich Timmis',
        handle: 'SEND Mentor',
        imageUrl: richTimmis,
      },
    },
    // More testimonials...
  ]
  
  export default function Testimonials() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Collaborative Approach</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What people are saying...
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                    <blockquote className="text-gray-900">
                      <p>{`“${testimonial.body}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <img alt="" src={testimonial.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                        <div className="text-gray-600">{`${testimonial.author.handle}`}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  