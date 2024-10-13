// src/pages/ProjectPage.js
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Button, Form } from "react-bootstrap";
import s from "../style.module.css";

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = useSelector((state) =>
    state.projects.projects.find((proj) => proj.id === parseInt(id))
  );

  useEffect(() => {
    // If the project is not found, navigate to the home page
    if (!project) {
      navigate("/");
    }
  }, [project, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    const fileInput = event.target.elements[0]; // Assumes the file input is the first element
    const file = fileInput.files[0];

    if (!file) {
      alert("Please upload a resume before submitting.");
      return; // Early return if no file is uploaded
    }

    // Handle the file upload logic here
    console.log("Application submitted with file:", file.name); // Example log

    // Display confirmation (replace with your actual submission logic)
    alert("Your application has been submitted!");

    // Optionally navigate to another page or back to the project list
    navigate("/"); // Navigate back to the home page after submission
  };

  if (!project) return <p>Loading...</p>;

  return (
    <Container className={s.projectPage}>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>Skills: {project.skills.join(", ")}</p>
      <Form onSubmit={handleSubmit}>
        {" "}
        {/* Add onSubmit handler here */}
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
