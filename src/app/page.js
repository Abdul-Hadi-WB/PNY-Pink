import React from "react";
import Home from "./(pages)/home/Home";

export const metadata = {
  title: "PNY-Pink",
  description:
    "This is a static meta description for my website homepage. Explore our services and features.",
};

const page = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default page;