import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./Navbar";
export default function SingleBlog() {
  return (
    <div>
      <Navbar />
      <h1>fefe</h1>
    </div>
  );
}

const t = withRouter(SingleBlog);
