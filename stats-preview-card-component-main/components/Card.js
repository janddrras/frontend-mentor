import styles from '../styles/Card.module.css'

function Card() {
    const stats = [
        {
            data: '10k+',
            heading: 'companies',
           
        },
        {
            data: '314',
            heading: 'templates',
           
        },
        {
            data: '12m+',
            heading: 'queries',
           
        },
    ]

    return (
        <div className={styles.card}>
            <div className={styles.imgWrapper} />
            <div className={styles.data}>
                <div className={styles.text}>
                    <h1>Get <span>insights</span> that help your business grow.</h1>
                    <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                </div>
                <div className={styles.stats}>
                    {stats.map((stat, idx) => {
                        return (
                            <div key={idx} className={styles.stat}>
                                <h2>{stat.data}</h2>
                                <h3>{stat.heading}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Card
