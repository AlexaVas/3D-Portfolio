
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Section({section, setSection, children }){


return (
  <>
    <Transition
      show={section}
      enter="ease-in duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-out duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      as={Fragment}>
      <Dialog as="div" onClose={setSection}>
        <div className="fixed inset-0 z-10 flex justify-center ">
          <Dialog.Panel className="fixed  w-screen  h-screen border-none rounded-lg  md:top-[12%] z-10 md:w-11/12 md:h-5/6 overflow-y-auto bg-white p-6  sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-end justify-end">
              <button
                type="button"
                className="-m-2.5 rounded-md p-4 text-gray-700"
                onClick={() => setSection(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className=" m-2 p-5  h-full md:h-5/6 ">
                {children}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  </>
);

}