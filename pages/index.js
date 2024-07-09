import Head from "next/head";
import { getSortedPostsData } from "../components/notes";
import Link from "next/link";
import NavBar from "@/components/navbar";

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Sandbox - Ayush Saran's Web Experiments</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Share+Tech+Mono&family=Silkscreen&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <header>
          <img src="/8bt-sandbox-wht.png" className="sandbox" />
          <h1 className="pageTitle">
            SAND
            <br />
            <b>BOX</b>
          </h1>
        </header>
        <NavBar current="home" />
        <main>
          <section className="postGrid">
            {allPostsData.map(({ id, date, title, category }) => (
              <div key={id} className="link">
                <Link key={id} href={`/notes/${id}`}>
                  <span
                    className={`category category-${category.toLowerCase()}`}
                  >
                    #{category}
                  </span>
                  <span className="title">{title}</span>
                  <span className="url">{date}</span>
                </Link>
              </div>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
