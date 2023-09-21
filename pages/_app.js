import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import react from 'react'

function _app({ Component, pageProps }) {

  return (
       <Layout>
     <Component {...pageProps} />
    </Layout>

 )
  
}

export default _app
