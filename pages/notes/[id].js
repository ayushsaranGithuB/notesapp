import Link from 'next/link'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../components/notes'
import Head from 'next/head'

export default function Note({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <main className='singleNote'>
                <article className='note'>
                    <div className="noteDate">
                        {postData.date}
                    </div>
                    <h1 className="headingXl">{postData.title}</h1>

                    <div className='noteText' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </article>
                <p className='center'>
                    <Link className='returnHomeLink' href='/'>&laquo; Back to All Posts</Link>
                </p>
            </main>
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