import React from 'react'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'
import Head from 'next/head'

const Index = ({ data }) => {
  return (
    <>
      <Head>
        <title>Meu Blog</title>
      </Head>
      <div className="w-1/2 mx-auto text-center">
        <div className='font-bold text-4xl p-8'>
          <RichText render={data.title} />
        </div>
        <div className='font-bold text-4xl p-2'>
          <RichText render={data.body} />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const client = Prismic.client('https://fsm-meu-blog.prismic.io/api/v2')
  const meuBlog = await client.getSingle('meu-blog')
  return {
    props: {
      data: meuBlog.data
    }
  }
}

export default Index