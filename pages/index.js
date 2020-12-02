import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Dev Explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full container mx-auto flex items-center">
        <div className="flex-col w-1/4 p-2">
        <div className="p-6">
          <img src="https://placebear.com/200/200" alt="" className="rounded-full"/>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae laboriosam at esse in, dolore reiciendis magnam repudiandae optio doloribus necessitatibus praesentium odio omnis voluptatem natus vel impedit quod blanditiis quae! Molestiae itaque sit ab quisquam laboriosam sed accusantium mollitia voluptas atque dolor consectetur similique illo rerum corporis quas et esse, a harum at ullam saepe! Distinctio sunt tempore impedit similique accusantium facere veritatis ipsum itaque maiores, ea libero? Tempora consectetur delectus voluptatem explicabo accusantium nesciunt modi quo quae? Voluptatibus reiciendis dolorum odio minima. Incidunt dolorum quisquam maxime eligendi alias facere aliquam similique, est fugit accusantium tenetur ea sed iste perferendis.</p>
        </div>
        <div className="w-3/4 flex-col p-2">
          <h1>Their Name</h1>
        </div>
      </div>
    </Layout>
  )
}
