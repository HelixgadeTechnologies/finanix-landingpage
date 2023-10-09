import '../styles/globals.css';
import Layout from '../components/Layout';
import UserContextProvider from '../context/UserContext';

function _app({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  );
}

export default _app;
