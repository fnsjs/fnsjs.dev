import clsx from 'clsx'
import Link from 'next/link'

export default function Header() {
  return <header className="text-black body-font w-full">
    <div className="flex bg-white border-b border-gray-200 inset-x-0 z-100 h-16 items-center">
      <div className="w-full max-w-screen-xl relative mx-auto px-6">
        <div className="flex items-center -mx-6">
          <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
            <div className="flex items-center">
              <Link href="/">
                <a className="block lg:mr-4 flex flex-row items-center text-lg font-semibold">
                  <svg className="inline h-10 "  viewBox="0 0 373 141" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>logo</title>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Artboard-Copy" transform="translate(-76.000000, -192.000000)" fillRule="nonzero">
                        <g id="logo" transform="translate(76.000000, 192.000000)">
                          <path d="M26.55,112.05 L26.55,75 L59.85,75 L59.85,52.5 L26.55,52.5 L26.55,29.55 L66,29.55 L66,7.05 L2.84217094e-14,7.05 L2.84217094e-14,112.05 L26.55,112.05 Z M102.75,112.05 L102.75,55.5 C105.55,54.5 108.6,54 111.9,54 C119.5,54 123.3,58.4 123.3,67.2 L123.3,67.2 L123.3,112.05 L148.8,112.05 L148.8,65.4 C148.8,54.9 145.6,46.875 139.2,41.325 C132.8,35.775 123.8,33 112.2,33 C99.4,33 87.75,35.05 77.25,39.15 L77.25,39.15 L77.25,112.05 L102.75,112.05 Z M188.1,113.85 C198.2,113.85 206.275,111.675 212.325,107.325 C218.375,102.975 221.4,96.65 221.4,88.35 C221.4,81.35 219.45,76 215.55,72.3 C211.65,68.6 205.05,65.55 195.75,63.15 C191.35,61.95 188.5,61 187.2,60.3 C185.9,59.6 185.25,58.6 185.25,57.3 C185.25,55.1 187.85,54 193.05,54 C198.05,54 205.3,55.45 214.8,58.35 L214.8,58.35 L217.35,37.65 C209.25,34.55 200.45,33 190.95,33 C181.35,33 173.85,35.175 168.45,39.525 C163.05,43.875 160.35,50 160.35,57.9 C160.35,64.3 162.15,69.375 165.75,73.125 C169.35,76.875 174.9,79.7 182.4,81.6 C188.7,83.3 192.625,84.525 194.175,85.275 C195.725,86.025 196.5,87.25 196.5,88.95 C196.5,91.55 193.55,92.85 187.65,92.85 C179.55,92.85 171.45,91.2 163.35,87.9 L163.35,87.9 L160.05,108.6 C168.15,112.1 177.5,113.85 188.1,113.85 Z M286.05,27.45 C290.55,27.45 294.05,26.2 296.55,23.7 C299.05,21.2 300.3,17.85 300.3,13.65 C300.3,9.45 299.05,6.15 296.55,3.75 C294.05,1.25 290.55,0 286.05,0 C281.55,0 278.025,1.225 275.475,3.675 C272.925,6.125 271.65,9.45 271.65,13.65 C271.65,17.85 272.925,21.2 275.475,23.7 C278.025,26.2 281.55,27.45 286.05,27.45 Z M265.05,140.1 C276.75,135.2 285.3,128.85 290.7,121.05 C296.1,113.25 298.8,102.45 298.8,88.65 L298.8,88.65 L298.8,34.8 L273.3,34.8 L273.3,87.6 C273.3,94.2 272.55,99.575 271.05,103.725 C269.55,107.875 267.6,111 265.2,113.1 C262.8,115.2 259.3,117.4 254.7,119.7 L254.7,119.7 L265.05,140.1 Z M338.85,113.85 C348.95,113.85 357.025,111.675 363.075,107.325 C369.125,102.975 372.15,96.65 372.15,88.35 C372.15,81.35 370.2,76 366.3,72.3 C362.4,68.6 355.8,65.55 346.5,63.15 C342.1,61.95 339.25,61 337.95,60.3 C336.65,59.6 336,58.6 336,57.3 C336,55.1 338.6,54 343.8,54 C348.8,54 356.05,55.45 365.55,58.35 L365.55,58.35 L368.1,37.65 C360,34.55 351.2,33 341.7,33 C332.1,33 324.6,35.175 319.2,39.525 C313.8,43.875 311.1,50 311.1,57.9 C311.1,64.3 312.9,69.375 316.5,73.125 C320.1,76.875 325.65,79.7 333.15,81.6 C339.45,83.3 343.375,84.525 344.925,85.275 C346.475,86.025 347.25,87.25 347.25,88.95 C347.25,91.55 344.3,92.85 338.4,92.85 C330.3,92.85 322.2,91.2 314.1,87.9 L314.1,87.9 L310.8,108.6 C318.9,112.1 328.25,113.85 338.85,113.85 Z" id="Fns.js" fill="#333333"></path>
                          <path d="M242.55,113.85 C247.05,113.85 250.55,112.625 253.05,110.175 C255.55,107.725 256.8,104.35 256.8,100.05 C256.8,95.85 255.55,92.525 253.05,90.075 C250.55,87.625 247.05,86.4 242.55,86.4 C237.95,86.4 234.4,87.6 231.9,90 C229.4,92.4 228.15,95.75 228.15,100.05 C228.15,104.35 229.4,107.725 231.9,110.175 C234.4,112.625 237.95,113.85 242.55,113.85 Z" id="Path" fill="#FDA215"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
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
                <a
                  className="block flex items-center hover:text-gray-700 mr-5"
                  href="https://twitter.com/fns_js"
                >
                  <svg
                    className="fill-current w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Twitter</title>
                    <path
                      d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"/>
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