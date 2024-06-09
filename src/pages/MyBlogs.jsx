import React, { useEffect, useState } from "react";
import { Loading, PostCard, StyledText, Title } from "../components";
import dataService from "../appwrite/data";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Query } from "appwrite";

function MyBlogs() {
  const [allPosts, setAllPosts] = useState(null);

  const userData = useSelector((state) => state.userData);

  useEffect(() => {
    try {
      dataService
        .getPosts([Query.equal("userId", userData.$id)])
        .then((data) => {
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
        Hmmm...{" "}
        <StyledText className="text-5xl tracking-wide sm:text-3xl ">
          These
        </StyledText>{" "}
        are mine.
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

export default MyBlogs;
