import Layout from '../components/layout';
import '../styles/index.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  // console.log(Component);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}