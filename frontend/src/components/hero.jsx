import { Container, Card, Button } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'

function Hero() {
    return (
        <div className="py-5">
            <Container className="d-flex justify-content-center">
                <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
                    <h1 className="text-center mb-4">
                        Mern Auth
                    </h1>
                    <p className="text-center mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt quis ut fugiat quae nihil ducimus atque labore debitis nulla omnis eius beatae earum deserunt magnam molestias, maxime id sit?
                        Maiores sint unde aliquid, delectus exercitationem quisquam laborum nostrum explicabo illum, corrupti obcaecati, deleniti quos id enim! Numquam, accusamus placeat aperiam dignissimos eius quas odit reprehenderit? Esse quam quibusdam eligendi.
                        Sed totam, soluta repudiandae quasi et natus sapiente incidunt reprehenderit. At unde sapiente atque deserunt quisquam ipsa, incidunt est, beatae aliquid magnam aliquam modi illo tempore quasi architecto neque dolorem.
                    </p>
                    <div className="d-flex">
                        <LinkContainer to='/login'>
                            <Button variant="primary" className="me-3">
                                Sign In
                            </Button>
                        </LinkContainer>
                        <LinkContainer to='/register'>
                            <Button variant="secondary" className="me-3">
                                Sign Up
                            </Button>
                        </LinkContainer>

                    </div>
                </Card>
            </Container>
        </div>
    )
}

export default Hero
