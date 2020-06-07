import style from '../styles/project_detail.module.scss'

function Project (props) {
  return (
    <div className={style.container}>
      <img className={style.image} src={props.image} />
      <div className={style.details}>
        <h1 className={style.title}>{props.name}</h1>
        <p className={style.description}>{props.description}</p>
        <div className={style.reference}>
          <i class='material-icons'>slideshow</i>
          {props.demo
            ? <a href={props.demo}>{props.demo}</a>
            : <p>Private</p>}
        </div>
        <div className={style.reference}>
          <i class='material-icons'>code</i>
          {props.source
            ? <a href={props.source}>{props.source}</a>
            : <p>Private</p>}
        </div>
      </div>
    </div>
  )
}

export default Project
