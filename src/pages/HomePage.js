import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../redux/projectSlice";
import ProjectList from "../components/ProjectList";

const HomePage = () => {
  const dispatch = useDispatch();
  const { projects, status, error } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects()); // Fetch projects on mount
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Project Tracker</h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default HomePage;
