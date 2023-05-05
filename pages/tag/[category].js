import Head from 'next/head'
import { getPostbyTag, getAllCategoryIds } from '@/components/notes'
import Link from 'next/link'
import NavBar from "@/components/navbar";
import { useState } from 'react';

export default function Category({ allPostsData,selectedCat }) {
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
            #{selectedCat.toUpperCase()}
          </h1>
        </header>
        <NavBar current={selectedCat} />
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
    let selectedCat = params.category;
    return {
        props: {
            allPostsData,
            selectedCat
        }
    }
}