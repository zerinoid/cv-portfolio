import styles from "./carousel.module.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Item from "./carouselItem"
import { useMediaQuery } from "react-responsive"

export default function Carousel() {
    let items = [
        {
            id: 1,
            title: "Curabitur lacinia pulvinar nibh",
            content: "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam."
        },
        {
            id: 2,
            title: "Nunc aliquet",
            content:
          "Augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio."
        },
        {
            id: 3,
            title: "Suspendisse potenti",
            content:
                " Existem várias formas de resolver uma questão de html e css ou javascript, mostre que você domina a melhor. "
        },
        {
            id: 4,
            title: "Nullam rutrum",
            content:
                "Integer placerat tristique nisl. Curabitur lacinia pulvinar nibh. Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.    "
        }
    ]

    const NextArrow = props => {
        const { className, style, onClick } = props
        return (
            <img
                src="/images/arrow-right.svg"
                alt="next"
                className={className}
                style={{
                    ...style,
                    right: 0,
                    height: "auto",
                    width: 22
                }}
                onClick={onClick}
            />
        )
    }

    const PrevArrow = props => {
        const { className, style, onClick } = props
        return (
            <img
                alt="prev"
                src="/images/arrow-left.svg"
                className={className}
                style={{
                    ...style,
                    zIndex: "1",
                    left: 0,
                    height: "auto",
                    width: 22
                }}
                onClick={onClick}
            />
        )
    }

    const min1200 = useMediaQuery({ query: "(min-width: 1200px)" })
    const min992 = useMediaQuery({ query: "(min-width: 992px)" })
    const min768 = useMediaQuery({ query: "(min-width: 768px)" })

    let slickOptions = {
        centerMode: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    if (min768) {
        slickOptions = {
            ...slickOptions,
            centerMode: true,
            centerPadding: "160px",
            slidesToShow: 1
        }
    }

    if (min992) {
        slickOptions = {
            ...slickOptions,
            centerMode: false,
            slidesToShow: 2
        }
    }

    if (min1200) {
        slickOptions = {
            ...slickOptions,
            centerMode: true,
            centerPadding: "160px",
            slidesToShow: 2
        }
    }

    return (
        <div className={styles.carousel}>
            <div className="max-width pad-mobile">
                <h4 className="mb-3">Skills:</h4>
                <Slider {...slickOptions}>
                    {items.map(item => {
                        return (
                            <Item key={item.id} n={item.id} title={item.title}>
                                {item.content}
                            </Item>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}
