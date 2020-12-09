import Head from 'next/head'
import Layout from '../components/layout'
import RepoContainer from '../components/RepoContainer'
import {H1} from '../components/typography'

export default function Profile() {
  return (
    <Layout>
      <Head>
        <title>Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full container px-4 md:px-6 sm:px-6 xs:px-2 mx-auto flex py-8">
        <div className="flex-col w-1/6 p-2 mr-2 xs:hidden">
          <div className="flex justify-center pb-4">
              <img src="https://placebear.com/200/200" alt="" className="rounded-full"/>
          </div>
         <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, assumenda.</p>
        </div>
        <div className="w-5/6 flex-col p-2">
          <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-between">
             <div className="pb-4">
               <H1>TEST NAME</H1>
             </div>
             <div className="">THEIR LANGUAGE ANALYSIS</div>
          </div>
         <RepoContainer title='Pinned Repositories' repos='test' type={'pinned'}/>
         <RepoContainer title='Other Repositories' repos='test' type={'other'}/>
        </div>
      </div>
    </Layout>
  )
}
