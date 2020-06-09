import styles from '../styles/page_projects.module.scss'
import Header from '../components/Header'
import Project from '../components/ProjectDetail'
import Head from 'next/head'

function Projects () {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Projects</title>
      </Head>
      <Header />
      <main className={styles.content}>
        <Project
          name='Orpheus'
          description='Multipurpose Discord bot mainly used for searching and playing youtube musics on Discord servers and checking Rainbow 6 Siege player stats. Built using Node.js, Discord.js, and various APIs.'
          image='/projects/orpheus.jpg'
          demo='https://orpheus.anjir.pro'
          source=''
        />
        <Project
          name='Diario'
          description='A task reminder app with designed to be fun to use and with modern user interface. Built using Unity in C#.'
          image='/projects/diario.jpg'
          demo=''
          source=''
        />
        <Project
          name='Cindua Mato'
          description='2D action-adventure game about folklore from Minangkabau. Built using Unity in C#.'
          image='/projects/cindua_mato.jpg'
          demo=''
          source=''
        />
        <Project
          name='Me, You & Our Dream'
          description='A platformer game project. Built using Unity in C#. '
          image='/projects/me_you_&_our_dream.jpg'
          demo='https://sorrowinrain.itch.io/me-you-our-dream'
          source=''
        />
      </main>
    </div>
  )
}

export default Projects
