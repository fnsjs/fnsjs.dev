import clsx from 'clsx'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function DocumentationLayout({children, categories = []}) {
  const router = useRouter()

  return (
    <div className="w-full max-w-screen-xl mx-auto px-6">
      <div className="lg:flex -mx-6">
        <div
          id="sidebar"
          className={clsx(
            'fixed inset-0 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5',
          )}
        >
          {Object.keys(categories).sort().map((category, i) => {
            if (categories[category].length === 0) return null;
            return <>
              <h3 key={i + "title"} className="text-base font-semibold text-gray-600 mb-2 mt-6">{category}</h3>
              <ul key={i}>
                {categories[category].map(({title}, i) => <li key={i} className="block py-1 px-1">
                  <Link href={`/docs/${title}`}>
                    <a>
                      {title}
                    </a>
                  </Link>
                </li>)}
              </ul>
            </>
          })}


        </div>
        <div
          id="content-wrapper"
          className={clsx(
            'min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5'
          )}
        >
          <div id="content">
            <div id="app" className="flex">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
