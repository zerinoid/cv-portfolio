import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styles from "./carouselItem.module.scss"

export default function Item({ n, title, children }) {
    return (
        <Container className={styles.carContainer}>
            <Row>
                <Col className={styles.colNumber}>{n}</Col>
                <Col className={styles.colTitle}>{title}</Col>
            </Row>
            <Row className={styles.rowBody}>{children}</Row>
        </Container>
    )
}
