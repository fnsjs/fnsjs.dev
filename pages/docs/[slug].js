import Container from '../../components/container'
import Header from '../../components/header'
import DocumentationLayout from '../../components/DocumentationLayout'
import Layout from '../../components/layout'
import { getAllCategories, getDocBySlug, getSlugs } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import clsx from 'clsx'

export default function Slug({categories, doc}) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  console.log(doc)
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Header/>
        <Container>
          <DocumentationLayout categories={categories}>
            <div className="flex-col flex my-4 w-full">
              <h1 className="text-4xl font-bold w-full capitalize">{doc?.title}</h1>
              <p className="text-gray-700 mb-4">{doc?.content?.description}</p>

              <SyntaxHighlighter language="javascript" style={atomDark}>
                {`${doc?.usage.es2015.code}\n\n${(doc?.content?.examples ?? []).join('\n\n')}`}
              </SyntaxHighlighter>

              <h2 className="mt-8 mb-2 text-2xl">Usage</h2>
              <h3 className="my-1 text-gray-600 font-semibold text-sm">{doc?.usage.es2015.title}</h3>
              <SyntaxHighlighter language="javascript" style={atomDark}>{doc?.usage.es2015.code}</SyntaxHighlighter>

              <h3 className="my-1 text-gray-600 font-semibold text-sm">{doc?.usage.esm.title}</h3>
              <SyntaxHighlighter language="javascript" style={atomDark}>{doc?.usage.esm.code}</SyntaxHighlighter>

              <h3 className="my-1 text-gray-600 font-semibold text-sm">{doc?.usage.commonjs.title}</h3>
              <SyntaxHighlighter language="javascript" style={atomDark}>{doc?.usage.commonjs.code}</SyntaxHighlighter>

              <h2 className="mt-8 mb-2 text-2xl">Params</h2>
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {`${doc?.content?.name}(${doc?.content?.params.map(d=>d.name).join(", ")})`}
              </SyntaxHighlighter>
              <table className="table-auto">
                <thead>
                <tr className="text-left uppercase text-xs text-gray-600">
                  <th className="w-3/12 p-2">Name</th>
                  <th className="w-3/12 p-2">Type</th>
                  <th className="p-2">description</th>
                </tr>
                </thead>
                <tbody>
                {doc?.content?.params.map((v, i) => {
                  return <tr key={i} className={clsx({"bg-gray-100 ": i % 2})}>
                    <td className="p-2">{v.name}</td>
                    <td className="p-2">{v.type.names[0]}</td>
                    <td className="p-2 text-sm">{v.description}</td>
                  </tr>
                })}
                </tbody>
              </table>
            </div>

          </DocumentationLayout>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({params}) {

  const categories = await getAllCategories();
  const doc = await getDocBySlug(params.slug);

  return {
    props: {
      doc,
      categories
    },
  }
}

export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => {
      return {
        params: {
          slug: slug,
        },
      }
    }),
    fallback: false,
  }
}
