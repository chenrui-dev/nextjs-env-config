import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const APP_ENV = process.env.APP_ENV || "default-xx";
const APP_VAR = process.env.APP_VAR || "default-var-x1";
const GOOGLE_URL = process.env.GOOGLE_URL;
const MEETUP_HELP_URL = process.env.MEETUP_HELP_URL;

console.log(`APP_ENV is ${APP_ENV}`);
console.log(`APP_VAR is ${APP_VAR}`);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS env config test</title>
        <meta name="description" content="Generated by NextJS env config test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          {`APP_ENV is ${APP_ENV}`}
        </p>
        <p className={styles.description}>
          {`APP_VAR is ${APP_VAR}`}
        </p>
        <p className={styles.description}>
          {`GOOGLE_URL is ${GOOGLE_URL}`}
        </p>
        <p className={styles.description}>
          {`MEETUP_HELP_URL is ${MEETUP_HELP_URL}`}
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
