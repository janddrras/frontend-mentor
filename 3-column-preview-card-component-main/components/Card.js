import styles from '../styles/Card.module.css'
import Button from './Button'

function Card({ props }) {
    return (
        <article className={styles.card} style={{ backgroundColor: `var(${props.color})` }} >
            <img src={props.icon} alt=""aria-hidden="true" />
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <Button props={'Learn More'} color={props.color} />
        </article>
    )
}

export default Card
