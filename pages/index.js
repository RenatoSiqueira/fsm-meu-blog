import React from 'react'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'
import Head from 'next/head'

const Index = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Meu Blog</title>
      </Head>
      <div className="w-1/2 mx-auto">
        {
          posts.map((each, index) => (
            <div key={index} className='border rounded-md my-2'>
              <div className='font-bold text-4xl text-center'>
                <RichText render={each.title} />
              </div>
              <div className='p-6'>
                <RichText render={each.body} />
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const client = Prismic.client('https://fsm-meu-blog.prismic.io/api/v2')
  const meuBlog = await client.getSingle('meu-blog')
  console.log(meuBlog)
  return {
    props: {
      posts: meuBlog.data.post
    }
  }
}

export default Index