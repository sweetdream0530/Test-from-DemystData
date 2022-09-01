import Head from 'next/head'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function FinalOutcome() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Final Outcome</title>
                <meta name="description" content="An example business loan client built for Demyst" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Final Outcome
                </h1>

                <p className={styles.description}>
                    You have been approved for a business loan!
                </p>
            </main>

            <Footer></Footer>

        </div>
    );
}