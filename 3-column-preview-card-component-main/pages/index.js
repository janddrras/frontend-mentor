import Head from 'next/head'
import styles from '../styles/Home.module.css'
import data from '../lib/data'
import Card from '../components/Card'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
        <title>Frontend Mentor | 3-column preview card component</title>
      </Head>
      <section className={styles.cardWrapper}>
        {data.map((item) => {
          return (
            <Card props={item} key={item.id} />
          )
        })}
      </section>
    </>
  )
}
