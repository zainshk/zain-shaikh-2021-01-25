import Head from 'next/Head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({title, children}) => {

  return (
    <div className="bg-gray-200">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <Navbar/>
      </Head>
      {children} 
      <Footer/>
    </div>
  )
}

export default Layout
