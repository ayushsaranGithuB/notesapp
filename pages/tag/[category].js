import Head from 'next/head'
import { getPostbyTag, getAllCategoryIds } from '@/components/notes'
import Link from 'next/link'
import NavBar from "@/components/navbar";

export default function Category({ allPostsData }) {
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
              <div key={id} className="link">
              <Link key={id} href={`/notes/${id}`}>              
                <span className={`category category-${category.toLowerCase()}`}>#{category}</span>
                 <span className="title">{title}</span>
                 <span className="url">
                   {date}
                 </span>
                 </Link>
                 </div>
            ))}
         
          </section>
        </main>
      </div>


        
    </>
  )
}


export async function getStaticPaths() {
  const paths = getAllCategoryIds()
  return {
      paths,
      fallback: false
  }
}
export async function getStaticProps({ params }) {
    const allPostsData = await getPostbyTag(params.category)
    return {
        props: {
            allPostsData
        }
    }
}