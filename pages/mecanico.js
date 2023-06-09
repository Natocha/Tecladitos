import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navegacion from '../components/Navbar'
import Carta from '../components/Card'



export default function Home() {
  return (
    <div className={styles.container}>
    <Head> 
        <title>Mecanicos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> 
    </Head>
    <body>
      <Navegacion/>
      <Carta/>
      </body>
    </div>

  )
}