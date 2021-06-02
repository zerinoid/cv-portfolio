import styles from "./banner.module.scss"

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className="max-width">
                <div className={styles.paragraph}>
                    <p className={`mb-2 ${styles.xs}`}>
                        Eu desenvolvo <span className={styles.highlight}>front-ends</span>
                    </p>
                    <p className={`mb-2 ml-5 ${styles.xs}`}>
                        que vão <strong>impactar</strong> o usuário.
                    </p>
                    <p className={`mb-2 mb-dm-0 ${styles.sm}`}>
                        <strong>Você está pronto</strong> para
                    </p>
                    <p className={`ml-3 ${styles.lg}`}>
                        <strong>dar um upgrade na sua equipe?</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}
