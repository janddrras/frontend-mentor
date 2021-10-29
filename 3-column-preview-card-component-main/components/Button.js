import styles from '../styles/Button.module.css'

function Button({props, color}) {

    return (
        <button className={styles.button} style={{color: `var(${color})`}}>
            {props}
        </button>
    )
}

export default Button
