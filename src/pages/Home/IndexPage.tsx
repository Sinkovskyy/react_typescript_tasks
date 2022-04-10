import { FC } from "react"
import { Container, Link } from "./styled"




const IndexPage: FC = () => {
    return (

        <Container>

            <Link href='/todos'>Todos</Link>
            <Link href='/photos'>Photos</Link>

        </Container>
    )
}


export default IndexPage