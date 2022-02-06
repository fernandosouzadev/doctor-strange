import { ImFacebook2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import styles  from './styles.module.scss'

import { ActiveLink } from './ActiveLink';



export function Header(){

    
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src="/images/Logo.png" alt="Logo Marvel Studios" />
            </div>
            <div className={styles.menu}>
                <ul>
                    <li><ActiveLink href="/" activeClassName={styles.active}><a>HOME</a></ActiveLink></li>
                    <li><ActiveLink href="/sinopse" activeClassName={styles.active}><a>SINOPSE</a></ActiveLink></li>
                    <li><ActiveLink href="/characters" activeClassName={styles.active}><a>CHARACTERS</a></ActiveLink></li>
                    <li><ActiveLink href="/about" activeClassName={styles.active}><a>ABOUT</a></ActiveLink></li>
                </ul>
                <div className={styles.social}>
                    <a href=""><ImFacebook2/></a>
                    <a href=""><BsInstagram/></a>
                    <a href=""><FaTwitterSquare/></a>
                </div>
            </div>
            

        </div>
    );
}