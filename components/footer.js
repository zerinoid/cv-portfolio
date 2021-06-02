import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styles from "./footer.module.scss"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container className="max-width">
                <Row>
                    <Col md={9}>
                        <h5 className="mb-4">
                            <strong>OBRIGADO</strong>
                        </h5>
                        <p className="mb-5">
                            <span className={styles.nunito}>
                                <strong>Sua atenção</strong>
                            </span>{" "}
                            é muito importante.
                            <br />
                            Este layout foi desenvolvido com <strong>React</strong> e{" "}
                            <strong>Next.js</strong> <br />
                            do Grupo Comunique-se.
                        </p>
                        <p className={styles.nunito}>
                            IMPORTANTE: Compartilhe esse site <br />
                            com todos que puder ;)
                        </p>
                    </Col>
                    <Col md={3} className="order-md-last order-first">
                        <div className={styles.redes}>
                            <a href="https://br.pinterest.com/" target="_blank" rel="noreferrer">
                                <img alt="Pinterest" src="/images/pinterest.svg" />
                            </a>
                            <a href="https://www.skype.com/en/" target="_blank" rel="noreferrer">
                                <img alt="Skype" src="/images/skype.svg" />
                            </a>
                            <a href="https://www.tumblr.com/" target="_blank" rel="noreferrer">
                                <img alt="Tumblr" src="/images/tumblr.svg" />
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                <img alt="YouTube" src="/images/youtube.svg" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
