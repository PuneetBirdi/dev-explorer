import Head from 'next/head'
import Layout from '../components/layout'
import RepoCard from '../components/RepoCard'

export default function Profile() {
  return (
    <Layout>
      <Head>
        <title>Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full container mx-auto flex items-center">
        <div className="flex-col w-1/6 pr-4">
         <div className="flex justify-center pb-4">
            <img src="https://placebear.com/200/200" alt="" className="rounded-full"/>
         </div>
         <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, assumenda.</p>
        </div>
        <div className="w-5/6 flex-col p-2">
          <div className="flex justify-between">
             <h1>NAME</h1>
             <div className="">THEIR LANGUAGE ANALYSIS</div>
          </div>
          <div className="flex flex-col">
             <div className="flex items-center space-x-1">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
               <h2>Pinned Repos</h2>
             </div>
             <div className="grid gap-4 grid-cols-3">
               <RepoCard name='Fake Name' description='Fake description goes here'/>
               <RepoCard name='Fake Name' description='Fake description goes here'/>
               <RepoCard name='Fake Name' description='Fake description goes here'/>
               <RepoCard name='Fake Name' description='Fake description goes here'/>
               <RepoCard name='Fake Name' description='Fake description goes here'/>
             </div>
          </div>
          <div className="">
             REST OF THEIR REPOS
          </div>
        </div>
      </div>
    </Layout>
  )
}
