import Head from "next/head"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Carousel from "../components/carousel"
import Feedback from "../components/feedback"
import Equipe from "../components/equipe"
import Contato from "../components/contato"

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>TesteInovação</title>
            </Head>
            <Banner />
            <Carousel />
            <Feedback />
            <Equipe />
            <Contato />
        </Layout>
    )
}
