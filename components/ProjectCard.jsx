import styles from '../styles/project-card.module.css'
import { ArrowUpRightIcon } from './Icons'

function ProjectCard ({ name, description, image, imageAlt, tags, url, cta }) {
  const media = url
    ? (
      <a
        className={styles.media}
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={`${name} — ${cta}`}
      >
        <img src={image} alt={imageAlt} width='960' height='540' />
      </a>
      )
    : (
      <div className={styles.media}>
        <img src={image} alt={imageAlt} width='960' height='540' />
      </div>
      )

  return (
    <article className={styles.card}>
      {media}
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{name}</h3>
          {url ? null : <span className='badge'>Private</span>}
        </div>
        <p className={styles.desc}>{description}</p>
        <ul className='tags'>
          {tags.map((tag) => (
            <li key={tag} className='tag'>{tag}</li>
          ))}
        </ul>
        {url
          ? (
            <a className='link-arrow' href={url} target='_blank' rel='noopener noreferrer'>
              {cta}
              <ArrowUpRightIcon />
            </a>
            )
          : (
            <span className={styles.private}>Repository private</span>
            )}
      </div>
    </article>
  )
}

export default ProjectCard
