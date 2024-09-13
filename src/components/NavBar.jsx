import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Link } from 'react-router-dom'; // Importa Link para manejar rutas

const navigation = [
  { name: 'Work', href: '/work', current: false },
  { name: 'Contact', href: '/contact', current: false }
];

const juanEstarli = [
  { name: 'Juan Estarli', href: '/', current: true }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-black">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          {/* Desktop menu with Juan Estarli aligned to the left */}
          <div className="hidden sm:hidden md:flex md:items-center md:space-x-4 md:w-full ">
            {/* Juan Estarli aligned to the left */}
            <div className="flex-1">
              {juanEstarli.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'text-white' : 'text-gray-300',
                    'text-xl font-bold px-4 py-2 rounded-md'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Other desktop menu items aligned to the right */}
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'text-white' : 'text-gray-300',
                    'hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center justify-center">
            <DisclosureButton as="a" href="#" className="text-white text-xl font-bold px-4 py-2 rounded-md">
              JE
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <DisclosurePanel className="sm:block">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
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
