import Head from 'next/head'
import { Header } from '../src/components/Header/Header'
import styles from "./styles/About.module.scss"


export default function About() {

  return (
      <div className={styles.About}>
        <Head>
          <title>Multiverse of madness - Doctor Strange</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
        <Header/>
        <section className={styles.section}>
          <img src="/images/Sinopse-spell-background.png" alt="" />
          <p>Marvel Studios is an entertainment brand defined the stories and successes of our more than 8,000 incredible 
            characters like Iron Man, Thor, Black Panther and Captain America. Based at the Walt Disney Studios in Burbank, 
            California, Marvel Studios is one of the most successful movie studios in the world, today. The Marvel Cinematic 
            Universe multi-film franchises, led by President Kevin Feige, is a universe filled with creativity, innovation and collaboration.</p>
        </section>
      </div>
  )
}

