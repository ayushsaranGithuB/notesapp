import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../components/notes'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Dev.Notes - Ayush Saran's MicroBlog</title>
      </Head>
      <main className='homePage' >
        <h1>Recent Notes</h1>
        <ul className='notesList'>
          {allPostsData.map(({ id, date, title }) => (
            <div key={id} className="card">
              <div class="noteCard">
                <h4 class="noteTitle"><Link href={`/notes/${id}`}>{title}</Link></h4>
                <p class="noteDate">{date}</p>
                <p class="noteText">Notice that the card width in this example have been set to 20rem, otherwise it will try to fill the current container/row where the card is.</p>
              </div>
            </div>
          ))}
        </ul>
      </main>
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