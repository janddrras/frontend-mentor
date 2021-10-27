import Head from 'next/head'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
        <title>Frontend Mentor | Order summary card</title>
      </Head>

      <main className={styles.main}>
        <Card />
      </main>

      
        <footer className={styles.attribution}>
          <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</p> 
          <p>Coded by <a href="#">janddrras</a>.</p> 
        </footer>

    </>
  )
}
