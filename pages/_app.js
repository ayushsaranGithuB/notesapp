import Layout from "@/components/layout";
import "@/styles/globals.css";
import "@/styles/mediaQ.css";
import "@/styles/atom-one-dark.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
