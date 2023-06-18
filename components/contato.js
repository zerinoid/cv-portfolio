import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import styles from "./contato.module.scss"

export default function Contato() {
    return (
        <Container className={`max-width ${styles.container}`}>
            <Row>
                <Col md={6} className="pr-5">
                    <h5 className="mb-4 mb-md-5">Gostou do site?</h5>
                    <p>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.


                    </p>
                </Col>
                <Col md={6}>
                    <Form>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control placeholder="Nome" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Sobrenome" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control
                                    as="textarea"
                                    rows={8}
                                    placeholder="Comentários"
                                />
                            </Col>
                        </Row>
                        <Button
                            className={`${styles.contactButton} ml-auto d-block`}
                        >
                            ENVIAR
                        </Button>
                    </Form>
                </Col>
            </Row>
            <div></div>
        </Container>
    )
}
