import React, { useEffect, useState } from "react";
import { Loading, PostCard, StyledText, Title } from "../components";
import dataService from "../appwrite/data";
import { toast } from "react-toastify";

function AllBlogs() {
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    try {
      dataService.getPosts().then((data) => {
        setAllPosts(data.documents);
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
  }, []);

  return (
    <div className="pb-14">
      <Title>
        Explore all{" "}
        <StyledText className="text-5xl tracking-wide sm:text-3xl">
          Blogs
        </StyledText>{" "}
        on Rblogs
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
