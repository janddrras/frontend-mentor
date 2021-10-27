import styles from '../styles/Card.module.css'

function Card() {
    return (
        <div className={styles.card}>
            <h1>Order Summary</h1>
            <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <div className={styles.price}>
                <img src="/images/icon-music.svg" alt="" aria-hidden="true" />
                <div className={styles.plan}>
                    <h2>Annual Plan</h2>
                    <p>$59.99/year</p>
                </div>
                <a href="#">Change</a>
            </div> 
            <button className={styles.primary}>Proceed to Payment</button>
            <button className={styles.secondary}>Cancel Order</button>          
        </div>
    )
}

export default Card
