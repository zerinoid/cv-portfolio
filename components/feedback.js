import styles from "./feedback.module.scss"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

export default function Feedback() {
    return (
        <div className={styles.container}>
            <div className="max-width">
                <div className={styles.content}>
                    <h5 className="mb-3">Quer um feedback?</h5>
                    <p className="mb-5">
                        Preencha seu email abaixo para receber
                        <br />
                        o feedback da sua avaliação.
                        <br />
                        Estamos tocendo por você!
                    </p>
                    <InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Digite seu email aqui..."
                                aria-label="Digite seu email aqui..."
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button className="px-4">ENVIAR</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </InputGroup>
                </div>
            </div>
        </div>
    )
}
