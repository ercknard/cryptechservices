import React from "react";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for could not be found.</p>
      <button onClick={() => router.push("/")}>Go back to Home</button>
    </div>
  );
};

export default Custom404;
