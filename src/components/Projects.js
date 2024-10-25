import { Col, Container, Row } from "react-bootstrap";

export const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Project 1 Description',
            imgUrl: projectImg1,
        },
        {
            title: 'Project 1',
            description: 'Project 1 Description',
            imgUrl: projectImg1,
        },

        {
            title: 'Project 1',
            description: 'Project 1 Description',
            imgUrl: projectImg1,
        }
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}   