import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import { CMS_NAME } from '../lib/constants'
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function Index() {
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

            <h2 className="mt-16 mb-2 text-2xl"/>
            <SyntaxHighlighter language="bash" style={atomDark}>
              npm install fns.js
            </SyntaxHighlighter>
            <SyntaxHighlighter language="bash" style={atomDark}>
              yarn add fns.js
            </SyntaxHighlighter>
          </article>


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
