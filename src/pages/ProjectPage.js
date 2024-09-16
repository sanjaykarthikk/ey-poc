// src/pages/ProjectPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Button, Form } from "react-bootstrap";
import s from "../style.module.css";

const ProjectPage = () => {
  const { id } = useParams();
  const project = useSelector((state) =>
    state.projects.projects.find((proj) => proj.id === parseInt(id))
  );

  if (!project) return <p>Project not found!</p>;

  return (
    <Container className={s.projectPage}>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>Skills: {project.skills.join(", ")}</p>
      <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload your resume</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit Application
        </Button>
      </Form>
    </Container>
  );
};

export default ProjectPage;
