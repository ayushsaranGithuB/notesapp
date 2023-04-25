import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../components/notes'
import Head from 'next/head'

export default function Note({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <main>
                <article className='note'>
                    <h1 className="headingXl">{postData.title}</h1>
                    <div className="noteDate">
                        {postData.date}
                    </div>
                    <div className='noteText' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </article>
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