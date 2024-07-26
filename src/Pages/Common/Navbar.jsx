import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Disclosure as="nav" className="bg-slate-50/50 shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
            <Link
                  to="/"
                  >
              <h1 className="text-cyan-600 font-normal font-SpecialElite text-5xl md:text-3xl sm:text-3xl">Krystle.Dev</h1>
              </Link>
              <div className="hidden sm:flex sm:space-x-8">
                <Link
                  to="/"
                  className={`inline-flex items-center border-b-2 px-1 pt-1 text-xl font-medium ${
                    currentPath === '/' ? 'border-cyan-600 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className={`inline-flex items-center border-b-2 px-1 pt-1 text-xl font-medium ${
                    currentPath === '/services' ? 'border-cyan-600 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className={`inline-flex items-center border-b-2 px-1 pt-1 text-xl font-medium ${
                    currentPath === '/about' ? 'border-cyan-600 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/portfolio"
                  className={`inline-flex items-center border-b-2 px-1 pt-1 text-xl font-medium ${
                    currentPath === '/portfolio' ? 'border-cyan-600 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Portfolio
                </Link>
                <Link
                  to="/contact"
                  className={`inline-flex items-center border-b-2 px-1 pt-1 text-xl font-medium ${
                    currentPath === '/contact' ? 'border-cyan-600 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Contact
                </Link>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className={`block h-6 w-6 ${open ? 'hidden' : 'block'}`} />
                  <XMarkIcon aria-hidden="true" className={`hidden h-6 w-6 ${open ? 'block' : 'hidden'}`} />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <DisclosureButton
                as={Link}
                to="/"
                className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
                  currentPath === '/' ? 'border-cyan-600 bg-cyan-50 text-cyan-700' : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                }`}
              >
                Home
              </DisclosureButton>
              <DisclosureButton
                as={Link}
                to="/services"
                className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
                  currentPath === '/services' ? 'border-cyan-600 bg-cyan-50 text-cyan-700' : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                }`}
              >
                Services
              </DisclosureButton>
              <DisclosureButton
                as={Link}
                to="/about"
                className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
                  currentPath === '/about' ? 'border-cyan-600 bg-cyan-50 text-cyan-700' : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                }`}
              >
                About
              </DisclosureButton>
              <DisclosureButton
                as={Link}
                to="/portfolio"
                className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
                  currentPath === '/portfolio' ? 'border-cyan-600 bg-cyan-50 text-cyan-700' : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                }`}
              >
                Portfolio
              </DisclosureButton>
              <DisclosureButton
                as={Link}
                to="/contact"
                className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
                  currentPath === '/contact' ? 'border-cyan-600 bg-cyan-50 text-cyan-700' : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                }`}
              >
                Contact
              </DisclosureButton>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
