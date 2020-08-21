import Container from '../../components/container'
import Header from '../../components/header'
import DocumentationLayout from '../../components/DocumentationLayout'
import Layout from '../../components/layout'
import { getAllCategories } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'

export default function Slug({categories}) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
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
              <h1 className="text-4xl font-bold w-full capitalize">Fns.JS</h1>
              <p className="text-gray-700 mb-4">
                Fns.js is a utility library that provides the most comprehensive with considering performance,
                modularity and consistent in browsers & Node.js
                <br/>
              </p>
            </div>
          </DocumentationLayout>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const categories = await getAllCategories();

  return {
    props: {categories},
  }
}
