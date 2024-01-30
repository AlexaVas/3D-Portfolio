/** @format */

import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import Section from './content/Section'
import About from "./content/About";
import Projects from "./content/Projects";
import ContactForm from "./content/contactForm";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";


export default function Header({contactMe, setContactMeOpen, setProjectsOpen, projectsOpen}) {

  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [aboutOpen, setAboutOpen] = useState(false);
  // const [projectsOpen, setProjectsOpen] = useState(false);
 
   const handleClick = (contentFunc) => {
     contentFunc(true);
     setMobileMenuOpen(false)
   };

  return (
    <header className="z-1 top-0 absolute w-screen flex justify-end items-end">
      <nav
        className="m-3 flex max-w-7xl justify-between p-3 lg:px-8"
        aria-label="Global">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <section className="hidden lg:flex lg:gap-x-12">
          <a
            onClick={() => setAboutOpen(true)}
            className="text-sm font-semibold leading-6 p-1 rounded-sm text-gray-900 hover:hover:bg-[#201d1f0b]">
            About
          </a>
          <button
            onClick={() => setProjectsOpen(true)}
            className="text-sm font-semibold leading-6 p-1 text-gray-900 rounded-sm hover:bg-[#201d1f0b]">
            Projects
          </button>
          <button
            onClick={() => setContactMeOpen(true)}
            className="text-sm font-semibold leading-6 p-1 text-gray-900 rounded-sm hover:bg-[#201d1f0b]">
            Contact Me
          </button>
        </section>
      </nav>

      {/* Mobile */}
      <Transition
        show={mobileMenuOpen}
        enter="ease-in duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-out duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        as={Fragment}>
        <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />

          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full h-64 overflow-y-auto bg-white px-6 py-6  sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-end justify-end">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 text-center items-center">
                  <a
                    onClick={() => handleClick(setAboutOpen)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    About
                  </a>
                  <a
                    onClick={() => handleClick(setProjectsOpen)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Projects
                  </a>
                  <a
                    onClick={() => handleClick(setContactMeOpen)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Contact me
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>

      {/* Content */}
      <Section section={aboutOpen} setSection={setAboutOpen}>
        <About />
      </Section>

      <Section section={projectsOpen} setSection={setProjectsOpen}>
        <Projects />
      </Section>

      <Section section={contactMe} setSection={setContactMeOpen}>
        <ContactForm/>
      </Section>
    </header>
  );
}
