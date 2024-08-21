import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { useAuth0 } from "@auth0/auth0-react";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  UnderlineIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

import { useLocation, useNavigate } from "react-router-dom";

import Modal from './Modal.js';

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Home | Study Nexus'
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="bg-white">

      {!isAuthenticated && (
        <div className="w-full min-h-[100vh] flex flex-col items-center relative bg-black">
        <div className="w-full h-[100vh] font-generica font-semibold text-center relative z-10">
          <div className='w-full h-full absolute bg-cover bg-fixed opacity-[0.7]' style={{
            backgroundImage: `url(./bgimg.jpg)`,
            backgroundPosition: 'center',
            zIndex: -1 // Ensure background is behind the text
          }}></div>
          <div className='w-full h-full pt-[10vh] flex justify-center items-center flex-col gap-10 relative z-20'>
            <h1 className='text-5xl text-white font-serif'>Welcome to Study Nexus!</h1>
            <h1 className="text-6xl text-white font-serif">Plan Pursue Progress</h1>
          </div>
        </div>
      </div>
      )

      }

      {
        isAuthenticated && (
          <div className="w-full min-h-[100vh] flex flex-col items-center relative bg-black">
          <div className="w-full h-[100vh] font-generica font-semibold text-center relative z-10">
            <div className='w-full h-full absolute bg-cover bg-fixed opacity-[0.7]' style={{
              backgroundImage: `url(./bgimg.jpg)`,
              backgroundPosition: 'center',
              zIndex: -1 // Ensure background is behind the text
            }}></div>
              <h1 className='text-5xl text-white mt-10'>Welcome {user.name} to Study Nexus!</h1>
              <h1 className="text-2xl text-white mt-4">Ready to Embark on your Study Journey</h1>

              <div className="mt-8 ml-5 mr-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 bg-black opacity-[0.6]">
              <button
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                onClick={() => navigate("/Calendar")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-white">Your Calender</h2>

                <p className="mt-1 text-sm text-gray-300">
                Your one-stop Calendar to effortlessly manage study schedules, track deadlines, and plan all your important academic events.
                </p>
              </button>

              <button
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                onClick={() => navigate("/bot")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-white">Khai AI (Study Bot)</h2>

                <p className="mt-1 text-sm text-gray-300">
                Your 24/7 study companion, here to provide instant answers for all your learning needs.
                </p>
              </button>

              <button
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                onClick={() => navigate("/study")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-white">Study Room</h2>

                <p className="mt-1 text-sm text-gray-300">
                A dedicated space where focused learning meets collaborative opportunities, designed to help you achieve your academic goals.
                </p>
              </button>


            </div>

            <div className="mt-12 text-center">
              <button
                onClick={openModal}
                className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Donate
              </button>
              <Modal isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </div>
            </div>

            
        )
      }
    </header >
  )
}