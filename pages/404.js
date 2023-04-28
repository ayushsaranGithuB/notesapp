// 404.js
import Link from 'next/link'
import Head from 'next/head'

export default function FourOhFour() {
    return (
        <>
            <Head>
                <title>404!</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
	            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	            <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Share+Tech+Mono&family=Silkscreen&display=swap" rel="stylesheet" />
            </Head>
            <div className="container errorPage">
                     <h1>
                        404
                    </h1>                      
                <p className='keyword'><Link href="/">&laquo; Return to home</Link></p>
            </div>
        </>
    )
    
}