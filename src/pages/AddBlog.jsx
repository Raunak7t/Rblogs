import React from "react";
import { AddBlogForm, StyledText, Title } from "../components";

function AddBlog() {
  return (
    <div>
      <Title>
        Add an{" "}
        <StyledText className="text-5xl tracking-wide ">Exciting</StyledText>{" "}
        blog post
      </Title>
      <AddBlogForm />
    </div>
  );
}

export default AddBlog;
