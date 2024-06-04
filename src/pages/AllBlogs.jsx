import React from "react";
import { StyledText, Title } from "../components";
import { useSelector } from "react-redux";

function AllBlogs() {
  return (
    <div>
      <Title>
        Explore all{" "}
        <StyledText className="text-5xl tracking-wide ">Blogs</StyledText> on
        Rblogs
      </Title>
      <pre>{useSelector((state) => state.userData)?.name}</pre>
    </div>
  );
}

export default AllBlogs;
