import Link from 'next/link'
import { getAllPostIds, getPostData } from '../../components/notes'
import Head from 'next/head'
import NavBar from "@/components/navbar";

export default function Note({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
	            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	            <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Share+Tech+Mono&family=Silkscreen&display=swap" rel="stylesheet" />
            </Head>
            <NavBar current={postData.category.toLowerCase()} />
            <div className="container singleNote">
                <header>
                    <Link className='returnHomeLink' href='/'>&laquo; Back to All Posts</Link>
                    <h1 className="pageTitle">
                        {postData.title}
                    </h1>
                </header>
                <article className='note'>
                    <div className="meta">
                        <p className='date'>{postData.date}</p>
                        <p>|</p>
                        <span className={`category category-${postData.category.toLowerCase()}`}>#{postData.category}</span>
                    </div>
                    <div className='noteText' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </article>                
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}