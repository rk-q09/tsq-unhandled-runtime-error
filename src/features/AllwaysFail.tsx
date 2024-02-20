"use client";

import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";

function failingQuery() {
  throw new Error("oh no");
}

const AllwaysFailComponent = () => {
  const { data } = useQuery({
    queryKey: ["always fail"],
    queryFn: failingQuery,
  });

  console.log("you never get this data", data);

  return <div>allways fail</div>;
};

export const AllwaysFail = dynamic(
  () => Promise.resolve(AllwaysFailComponent),
  {
    ssr: false,
  },
);
