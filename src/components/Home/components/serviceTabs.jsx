import { Fragment, } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

export default function Tabs() {
  
  return (
    <div className="">
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl">
              Technical Specifications
            </h2>
            <p className="mt-4 text-gray-500">
              The Organize modular system offers endless options for arranging your favorite and most used items. Keep
              everything at reach and in its place, while dressing up your workspace.
            </p>
          </div>
          {tabs.length > 0 && (
            <TabGroup className="mt-4">
              <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                  <TabList className="-mb-px flex space-x-10">
                    {tabs.map((tab) => (
                      <Tab
                        key={tab.name}
                        className={({ selected }) =>
                          selected
                            ? 'text-sm font-semibold leading-6 text-ccDarkBlue border-b-2 border-ccLightBlue'
                            : 'text-sm font-semibold leading-6 text-ccDarkBlue py-6 font-medium'
                        }
                      >
                        {tab.name}
                      </Tab>
                    ))}
                  </TabList>
                </div>
              </div>

              <TabPanels as={Fragment}>
                {tabs.map((tab) => (
                  <TabPanel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                    {tab.features.map((feature) => (
                      <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                        <div className="mt-6 lg:col-span-5 lg:mt-0">
                          <h3 className="text-lg font-medium text-ccDarkBlue">{feature.name}</h3>
                          <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                        </div>
                        <div className="lg:col-span-7">
                          <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 sm:aspect-w-5 sm:aspect-h-2">
                            {feature.imageSrc && (
                              <img alt={feature.imageAlt} src={feature.imageSrc} className="object-cover object-center" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          )}
        </div>
      </section>
    </div>
  );
}
