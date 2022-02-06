import { ActiveLink } from '../Header/ActiveLink'
import styles  from './styles.module.scss'

export function CardCharacter(){
    return(
        <div className={styles.card}>
            <div className={styles.menu}>
                <ul>
                        <li><ActiveLink href="/" activeClassName={styles.active}><a>STORY</a></ActiveLink></li>
                        <li><ActiveLink href="/sinopse" activeClassName={styles.active}><a>SKILLS</a></ActiveLink></li>
                        <li><ActiveLink href="/characters" activeClassName={styles.active}><a>CAST</a></ActiveLink></li>
                        <li><ActiveLink href="/about" activeClassName={styles.active}><a>COMICS</a></ActiveLink></li>
                        <li><ActiveLink href="/about" activeClassName={styles.active}><a>MCU</a></ActiveLink></li>
                </ul>
            </div>
            <div className={styles.character}>
                <div><h1>Charaters</h1></div>
                <div>
                    <textarea>Wanda Maximoff, also known as the Scarlet Witch, is a native of Sokovia who grew up with her fraternal 
                    twin brother, Pietro. Born with the latent mythical ability to harness Chaos Magic, she developed a hatred against Tony Stark and rallied 
                    anti-American protests after the Novi Grad Bombings killed her parents. Years later, in an effort to help purge their country of strife, the 
                    twins joined HYDRA and agreed to undergo experiments with the Scepter under the supervision of Wolfgang von Strucker, with the Mind Stone awakening
                    and amplifying Wanda's powers. While her brother developed super-speed, she attained various psionic abilities. When HYDRA fell, the twins joined
                    Ultron to get their revenge on Stark, but abandoned him when they discovered his true intentions to eradicate humanity. Wanda and Pietro joined
                    the Avengers during the Battle of Sokovia to stop Ultron; Pietro was killed during the battle but Wanda survived, and shortly after relocated 
                    to the Avengers Compound in the United States of America.
                    During the Avengers Civil War, she sided with Captain America and was briefly  imprisoned on the Raft before Rogers freed her alongside</textarea></div>
            </div>
        </div>
    )
}