import '../styles/globals.css'
import {Layout} from "../components/layout";
import {Head} from "next/document";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Head>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </>
  )
}

export default MyApp
