// src/components/ProjectItem.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import s from "../style.module.css";

const ProjectItem = ({ project }) => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <Card className={s.projectItem}>
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Card.Text>Skills: {project.skills.join(", ")}</Card.Text>
        <Button variant="primary" onClick={handleApplyClick}>
          Apply
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectItem;
