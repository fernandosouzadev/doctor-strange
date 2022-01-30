import { ImFacebook2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import styles  from './styles.module.scss'


export function Header(){
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src="/images/Logo.png" alt="Logo Marvel Studios" />
            </div>
            <div className={styles.menu}>
                <ul>
                    <li><a href="#" className={styles.active}>HOME</a></li>
                    <li><a href="#">SINOPSE</a></li>
                    <li><a href="#">CHARACTERS</a></li>
                    <li><a href="#">ABOUT</a></li>
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