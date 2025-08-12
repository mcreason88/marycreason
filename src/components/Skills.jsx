import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
// Data
import { skillData, resume } from "../data";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

export default function Skills() {
  const { theme } = useAppContext();

  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Skills</h2>
            <div className="underline"></div>
          </Title>
          {skillData.map((category) => (
            <div key={category.category}>
              <h3>{category.category}</h3>
              <Row className="mt-3 align-items-center">
                {category.skills.map((skill) => (
                  <Col xs={4} md={2} key={skill.id} className="my-md-5">
                    <figure>
                      {skill.skill}
                      <figcaption>{skill.name}</figcaption>
                    </figure>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
          {resume && (
            <a href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
                R&eacute;sum&eacute;
              </Button>
            </a>
          )}
        </Container>
      </section>
    </Element>
  );
}
