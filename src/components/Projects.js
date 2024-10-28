import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projectImg1 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Tab, Nav } from "react-bootstrap";


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
                        import Nav from 'react-bootstrap/Nav';
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                Tab Three
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return <ProjectCard key={index} {...project} />
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                   </Col>
                </Row>
            </Container>
            <img src={colorSharp2} alt="Project" className="background-img" />
        </section>
    )
}   