"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AllwaysFail } from "@/features/AllwaysFail";

export default function Home() {
  return (
    <ErrorBoundary
      fallbackRender={(error) => {
        console.log("error", error);
        return <div>error</div>;
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <AllwaysFail />
      </Suspense>
    </ErrorBoundary>
  );
}
