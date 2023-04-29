import Layout from '@/components/layout'
import '@/styles/globals.css'
import '@/styles/mediaQ.css'


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
