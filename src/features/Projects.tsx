"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export async function fetchProjects() {
  console.info("fetch projects");
  let { data } = await axios.get(
    `https://api.github.com/users/tannerlinsley/repos`,
  );
  return data;
}

export const Projects = () => {
  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  return <div>{data[0].name}</div>;
};
