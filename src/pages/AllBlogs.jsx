import React, { useEffect, useState } from "react";
import { Loading, PostCard, StyledText, Title } from "../components";
import { useSelector } from "react-redux";
import dataService from "../appwrite/data";

function AllBlogs() {
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    try {
      dataService.getPosts().then((data) => {
        setAllPosts(data.documents);
      });
    } catch (error) {}
  }, []);

  return (
    <div>
      <Title>
        Explore all{" "}
        <StyledText className="text-5xl tracking-wide ">Blogs</StyledText> on
        Rblogs
      </Title>
      {allPosts ? (
        <div className="all-blogs flex flex-wrap justify-center gap-8 items-center mt-10">
          {allPosts.map((post) => (
            <PostCard key={post.$id} post={post} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default AllBlogs;
