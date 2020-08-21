import SidebarLayout from './SidebarLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function DocumentationLayout(props) {
  const router = useRouter()

  return (
    <>
      {/*<Title suffix={router.pathname === '/' ? undefined : 'Tailwind CSS'}>*/}
      {/*  {props.layoutProps.meta.metaTitle || props.layoutProps.meta.title}*/}
      {/*</Title>*/}
      <Head>
        <meta key="twitter:card" name="twitter:card" content="summary"/>
      </Head>
      <SidebarLayout {...props}/>
    </>
  )
}
