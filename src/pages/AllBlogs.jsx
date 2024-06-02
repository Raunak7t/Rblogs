import React from "react";
import { StyledText, Title } from "../components";

function AllBlogs() {
  return (
    <div>
      <Title>
        Explore all{" "}
        <StyledText className="inline text-5xl tracking-wide ">
          Blogs
        </StyledText>{" "}
        on Rblogs
      </Title>
    </div>
  );
}

export default AllBlogs;
