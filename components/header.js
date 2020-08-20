import clsx from 'clsx'
import Link from 'next/link'

export default function Header() {
  return <header className="text-black bg-primary body-font w-full">
    <div className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
      <div className="w-full max-w-screen-xl relative mx-auto px-6">
        <div className="flex items-center -mx-6">
          <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
            <div className="flex items-center">
              <Link href="/">
                <a className="block lg:mr-4 flex flex-row items-center text-lg font-semibold">
                  <svg className="w-10 h-10 block mr-4" viewBox="0 0 525 525" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <title>Fns.js</title>
                    <defs>
                      <rect id="path-1" x={0} y={0} width={525} height={525} rx={36} />
                    </defs>
                    <g id="Page-1" stroke="none" strokeWidth={1}>
                      <g id="logo">
                        <mask id="mask-2" fill="white">
                          <use xlinkHref="#path-1" />
                        </mask>
                        <use id="Rectangle" fill="#F0DB4F" xlinkHref="#path-1" />
                        <path d="M658,135 L658,391 L263,391 C192.307552,391 135,333.692448 135,263 C135,192.307552 192.307552,135 263,135 L263,135 L658,135 Z" id="Combined-Shape" fill="#323330" mask="url(#mask-2)" />
                      </g>
                    </g>
                  </svg> Fns.js
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-grow min-w-0 lg:w-3/4 xl:w-4/5">
            <div className="w-full min-w-0 lg:px-6 xl:w-3/4 xl:px-12">
            </div>
            <button
              type="button"
              id="sidebar-open"
              className={clsx(
                'flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700',
                {
                  hidden: true,
                }
              )}
              aria-label="Open site navigation"
            >
              <svg
                className="fill-current w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
            <button
              type="button"
              id="sidebar-close"
              className={clsx(
                'flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700',
                {
                  hidden: false,
                }
              )}
              aria-label="Close site navigation"
            >
              <svg
                className="fill-current w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
              </svg>
            </button>
            <div className="hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6">
              <div className="flex justify-start items-center text-gray-500">
                <a
                  className="block flex items-center hover:text-gray-700 mr-5"
                  href="https://github.com/fnsjs/fns.js"
                >
                  <svg
                    className="fill-current w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>GitHub</title>
                    <path
                      d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
}
