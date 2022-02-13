import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import { useState } from 'react'
import { Header } from '../src/components/Header/Header'
import styles from "./styles/Characters.module.scss"

type Character = {
  [dados:string]:{
      name: string;
      image: string;
      description: string;
      skills: string;
      cast: string;
      mcu: string;
  } | any
}
type CharacterState = {
      name: string;
      imageCharacter: string;
      image: string;

}

export default function Characters(props:Character) {
  const characters = props.dados
  const [activeCharacter , setActiveCharacter] = useState<CharacterState>(
    {
      name: 'Doctor Strange',
      imageCharacter:'/images/doctor-home.png',
      image:''
    }
    );

  return (
      <div className={styles.Characters}>
        <Head>
          <title>Multiverse of madness - Doctor Strange</title>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <Header/>
        <section className={styles.section}>
          <div className={styles.name}><h1>{activeCharacter.name}</h1></div>
          <div className={styles.characters}>
          <div className={styles.card}>
              <div className={styles.menu}>
                  <ul>
                          <li><a>STORY</a></li>
                          <li><a>SKILLS</a></li>
                          <li><a>CAST</a></li>
                          <li><a>COMICS</a></li>
                          <li><a>MCU</a></li>
                  </ul>
              </div>
              <div className={styles.character}>
                {
                    characters && characters.map((character:CharacterState)=>
                    <a  key={character.name} className={styles.characterSelect}><img onClick={ ()=> setActiveCharacter(character)} src={character.image}></img></a>     
                  )         
                }

                  <div>
                      <textarea defaultValue='Wanda Maximoff, also known as the Scarlet Witch, is a native of Sokovia who grew up with her fraternal 
                      twin brother, Pietro. Born with the latent mythical ability to harness Chaos Magic, she developed a hatred against Tony Stark and rallied 
                      anti-American protests after the Novi Grad Bombings killed her parents. Years later, in an effort to help purge their country of strife, the 
                      twins joined HYDRA and agreed to undergo experiments with the Scepter under the supervision of Wolfgang von Strucker, with the Mind Stone awakening
                      and amplifying Wandas powers. While her brother developed super-speed, she attained various psionic abilities. When HYDRA fell, the twins joined
                      Ultron to get their revenge on Stark, but abandoned him when they discovered his true intentions to eradicate humanity. Wanda and Pietro joined
                      the Avengers during the Battle of Sokovia to stop Ultron; Pietro was killed during the battle but Wanda survived, and shortly after relocated 
                      to the Avengers Compound in the United States of America.
                      During the Avengers Civil War, she sided with Captain America and was briefly  imprisoned on the Raft before Rogers freed her alongside'></textarea></div>
                  </div>
              </div>
              <AnimatePresence>
                <motion.img
                  key={activeCharacter.imageCharacter}
                  src={activeCharacter.imageCharacter}
                  initial={{ x: 300, opacity: 1 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                />
              </AnimatePresence>
            </div>
      </section>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://doctor-strange.vercel.app/api/characters`)
  const dados = await res.json()
  // Pass data to the page via props
  return { 
    props: { dados} 
  }
}