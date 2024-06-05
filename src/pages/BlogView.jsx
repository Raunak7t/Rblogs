import React from "react";
import { useParams } from "react-router-dom";

function BlogView() {
  const { id } = useParams();

  return <div>BlogView {id}</div>;
}

export default BlogView;
