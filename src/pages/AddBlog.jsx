import React from "react";
import { AddBlogForm, StyledText, Title } from "../components";

function AddBlog() {
  return (
    <div className="pb-14">
      <Title>
        Add an{" "}
        <StyledText className="text-5xl tracking-wide sm:text-3xl">
          Exciting
        </StyledText>{" "}
        blog post
      </Title>
      <AddBlogForm />
    </div>
  );
}

export default AddBlog;
