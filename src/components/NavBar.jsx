import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Nosotros', href: '/nosotros', current: false },
  { name: 'Paquetes', href: '/paquetes', current: false },
  { name: 'Contacto', href: '/contacto', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-white fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo aligned to the left */}
          <div className="flex items-center">
            <img 
              src="logo-golf-wine.png" 
              alt="Logo" 
              className="w-8 h-8 object-contain" 
            />
            <Link to="/" className="text-black text-xl font-bold px-2 py-2 font-['SpaceGroteskBold']">
              Golf & Wine Trips
            </Link>
          </div>

          {/* Menu hamburger icon */}
          <div className="md:hidden">
            <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </DisclosureButton>
          </div>

          {/* Desktop menu (hidden on mobile) */}
          <div className="hidden md:flex space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  item.current ? 'bg-black text-black' : 'text-black hover:bg-gray-700 hover:text-gray-500', // Texto negro por defecto, gris al hover
          'block px-3 py-2 rounded-md text-base font-medium'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 text-right">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              className={classNames(
                item.current ? 'bg-black text-black' : 'text-black hover:bg-gray-700 hover:text-gray-500', // Texto negro por defecto, gris al hover
          'block px-3 py-2 rounded-md text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
