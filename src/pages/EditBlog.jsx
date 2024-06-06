import React, { useEffect, useState } from "react";
import { AddBlogForm, Loading, StyledText, Title } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import dataService from "../appwrite/data";

function EditBlog() {
  const [post, setPost] = useState();
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dataService.getPost(id).then((post) => {
        if (post) setPost(post);
      });
    } else {
      navigate("/app");
    }
  }, []);

  return (
    <div>
      <Title>
        Update and{" "}
        <StyledText className="text-5xl tracking-wide ">Enhance</StyledText>{" "}
        your blog post
      </Title>
      {post ? <AddBlogForm blog={post} /> : <Loading />}
    </div>
  );
}

export default EditBlog;
