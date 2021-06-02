import Masonry from "react-masonry-css"
import styles from "./equipe.module.scss"

export default function Equipe() {
    let items = [
        {
            id: 1,
            name: "João Pereira",
            age: "30",
            role: "Desenvolvedor",
            padding: 140
        },
        {
            id: 2,
            name: "Diogo Fraga",
            age: "30",
            role: "Gestor de Inovação<br/>Líder ténico",
            padding: 245
        },
        {
            id: 3,
            name: "Bia Ferreira",
            age: "28",
            role: "Designer de<br/> Interface",
            padding: 140
        },
        {
            id: 4,
            name: "Michael Bravo",
            age: "34",
            role: "Desenvolvedor<br/>Backend",
            padding: 235
        },
        {
            id: 5,
            name: "Bianca Silva",
            age: "33",
            role: "Analista de <br/>Qualidade",
            padding: 140
        },
        {
            id: 6,
            name: "Augusto Costa",
            age: "24",
            role: "Desenvolvedor <br/>Frontend",
            padding: 240
        },
        {
            id: 7,
            name: "Marco Dias",
            age: "41",
            role: "Desenvolvedor <br/>Backend",
            padding: 240
        },
        {
            id: 8,
            name: "Miguel Silva",
            age: "32",
            role: "Desenvolvedor <br/>Backend",
            padding: 220
        },
        {
            id: 9,
            name: "Carlos Gomes",
            age: "46",
            role: "Desenvolvedor <br/>Fullstack",
            padding: 140
        },
        {
            id: 10,
            name: "Cristiano Souza",
            age: "21",
            role: "Analista de <br/>Qualidade",
            padding: 140
        },
        {
            id: 11,
            name: "Bruno Lima",
            age: "36",
            role: "Designer de <br/>Interface",
            padding: 30
        }
    ]

    items = items.map(item => {
        return (
            <div key={item.id} style={{ paddingTop: item.padding }}>
                <h6 className="mb-1">
                    {item.name}, {item.age}
                </h6>
                <p
                    className={styles.titulo}
                    dangerouslySetInnerHTML={{ __html: item.role }}
                />
            </div>
        )
    })

    return (
        <div className="max-width pad-mobile">
            <h4 className={`${styles.roxo} text-center mb-4`}>A equipe</h4>
            <Masonry
                breakpointCols={{ default: 4, 992: 3, 768: 2, 576: 1 }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {items}
            </Masonry>
        </div>
    )
}
