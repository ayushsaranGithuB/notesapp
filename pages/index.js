import Head from 'next/head'
import { getSortedPostsData } from '../components/notes'
import Link from 'next/link'
import NavBar from "@/components/navbar";

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Dev.Notes - Ayush Saran's MicroBlog</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
	      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	      <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Share+Tech+Mono&family=Silkscreen&display=swap" rel="stylesheet" />
      </Head>
      <div className="container">
        <header>
          <h1 className="pageTitle">
            DEV NOTES
          </h1>
        </header>
        <NavBar current='home' />
        <main>
          <section className="postGrid">
            {allPostsData.map(({ id, date, title, category }) => (
              
              <Link href={`/notes/${id}`}>
              <div  key={id} className="link">
                <p className={`category category-${category.toLowerCase()}`}>#{category}</p>
                 <p className="title">{title}</p>
                 <p className="url">
                   <a href="/">
                   {date}
                   </a>
                 </p>
                 </div>
                 </Link>
            ))}
         
          </section>
        </main>
      </div>


        
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}