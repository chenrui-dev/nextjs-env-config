import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const APP_ENV = process.env.APP_ENV || "default-xx";
const APP_VAR = process.env.APP_VAR || "default-var-x1";
const GOOGLE_URL = process.env.GOOGLE_URL;
const MEETUP_HELP_URL = process.env.MEETUP_HELP_URL || "default-meetup-help-url";
const NEXT_PUBLIC_MEETUP_URL = process.env.NEXT_PUBLIC_MEETUP_URL;

// eslint-disable-next-line no-console
console.log(`APP_ENV is ${APP_ENV}`);
// eslint-disable-next-line no-console
console.log(`APP_VAR is ${APP_VAR}`);
// eslint-disable-next-line no-console
console.log(`GOOGLE_URL is ${GOOGLE_URL}`);
// eslint-disable-next-line no-console
console.log(`MEETUP_HELP_URL is ${MEETUP_HELP_URL}`);
// eslint-disable-next-line no-console
console.log(`NEXT_PUBLIC_MEETUP_URL is ${NEXT_PUBLIC_MEETUP_URL}`);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS env config test</title>
        <meta name="description" content="nextjs-env-config test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js!
        </h1>

        <h2 id="config">config test</h2>

        <h2 id="appEnv">
          {`APP_ENV is ${APP_ENV}`}
        </h2>
        <h2 id="appVar">
          {`APP_VAR is ${APP_VAR}`}
        </h2>
        <h2 id="googleUrl">
          {`GOOGLE_URL is ${GOOGLE_URL}`}
        </h2>
        <h2 id="meetupHelpUrl">
          {`MEETUP_HELP_URL is ${MEETUP_HELP_URL}`}
        </h2>
        <h2 id="nextPublicMeetupUrl">
          {`NEXT_PUBLIC_MEETUP_URL is ${NEXT_PUBLIC_MEETUP_URL}`}
        </h2>
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
