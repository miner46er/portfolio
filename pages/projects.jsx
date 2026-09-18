import Head from 'next/head'
import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'
import PROJECTS from '../data/projects'

function Projects () {
  return (
    <div className='view'>
      <Head>
        <title>Projects — Stefanus Ardi Mulia</title>
        <meta name='description' content='Things I have shipped — a Discord bot, Unity games, and other projects.' />
      </Head>
      <div className='wrap'>
        <header className='section-head'>
          <div>
            <p className='eyebrow'>Projects</p>
            <h1 className='page-title'>Things I've shipped</h1>
          </div>
          <Link href='/'>Back home</Link>
        </header>
        <div className='project-grid'>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
