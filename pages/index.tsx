import Head from 'next/head'
import { Header } from '../src/components/Header/Header'
import styles from "./styles/Home.module.scss"
import Modal from 'react-modal';
import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { BsPlayCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';

Modal.setAppElement('#__next');

export default function Home() {
  const [modalIsOpen, setIsOpen] = React.useState(false);


  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }

  const introAnimation = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

  return (
      <div className={styles.home}>
        <Head>
          <title>Multiverse of madness - Doctor Strange</title>
          <meta name="description" content="Generated by create next app" />
          
        </Head>
        <Header/>
        <section className={styles.section}>
       
          <div className={styles.doctor}>
            <img src='/images/doctor-home.png' alt=""></img>
            <img className={styles.bgdoctor} src='/images/background-doctor.png' alt="" />
          </div>
          <motion.main
            variants={introAnimation} 
            initial="hidden" 
            animate="enter" 
            exit="exit" 
            transition={{ type: 'linear' }}
            className=""
        >
          <div className={styles.intro}>
            <span>Welcome to <h1>Multiverse <br/>of madness</h1></span>
            <div onClick={handleOpenModal}>
              <BsPlayCircle/>
              <img src="images/trailer.png" alt="" />
            </div>

            <Modal
              isOpen={modalIsOpen}
              contentLabel="Example Modal"
              style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.75)'
                },
                content: {
                  top: '70%',
                  left: '70%',
                  right: 'auto',
                  bottom: 'auto',
                  transform: 'translate(-50%, -50%)',
                  padding: '0',
                  border:0,
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
              }
            }
            >
            <button onClick={handleCloseModal} className={styles.closemodal}>{<MdOutlineClose/>}</button>
            <iframe width="600" height="400" src="https://www.youtube.com/embed/Rt_UqUm38BI?controls=0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </Modal>
          </div>
          </motion.main>
        </section>
      </div>
  )
}


