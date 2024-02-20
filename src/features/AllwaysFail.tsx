"use client";

import { useQuery } from "@tanstack/react-query";

function failingQuery() {
  throw new Error("oh no");
}
export const AllwaysFail = () => {
  const { data } = useQuery({
    queryKey: ["always fail"],
    queryFn: failingQuery,
  });

  console.log("you never get this data", data);

  return <div>allways fail</div>;
};
