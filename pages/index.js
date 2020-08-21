import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Link from 'next/link'
import { CMS_NAME } from '../lib/constants'

export default function Index({allPosts}) {
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
          <article className="max-w-lg mx-auto text-center mb-12">
            <h1 className="text-6xl text-center mt-12 font-bold">Fns.js</h1>
            <h1 className="text-2xl text-center my-6">A comprehensive Javascript utility library with
              considering <span className="font-bold">performance</span>, <span className="font-bold">modularity</span>,
              and <span className="font-bold">consistency</span></h1>

            <Link href="/docs">
              <a className="bg-primary px-6 py-3 text-lg rounded inline-block mx-auto font-semibold">
                Documentation
              </a>
            </Link>
          </article>


          <pre className="bg-gray-200 px-4 py-2 rounded-md max-w-sm mx-auto mt-12">
              npm install fns.js
            </pre>
          <pre className="bg-gray-200 px-4 py-2 rounded-md max-w-sm mx-auto mt-8">
              yarn add fns.js
            </pre>
          {/*{heroPost && (*/}
          {/*  <HeroPost*/}
          {/*    title={heroPost.title}*/}
          {/*    coverImage={heroPost.coverImage}*/}
          {/*    date={heroPost.date}*/}
          {/*    author={heroPost.author}*/}
          {/*    slug={heroPost.slug}*/}
          {/*    excerpt={heroPost.excerpt}*/}
          {/*  />*/}
          {/*)}*/}
          {/*{morePosts.length > 0 && <MoreStories posts={morePosts}/>}*/}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: {allPosts},
  }
}
