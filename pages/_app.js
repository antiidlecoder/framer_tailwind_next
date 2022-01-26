import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import { AnimatePresence } from "framer-motion";
import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';


function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default MyApp;
