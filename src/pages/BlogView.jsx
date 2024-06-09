import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Loading } from "../components";
import dataService from "../appwrite/data";
import { format } from "date-fns";
import parse from "html-react-parser";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function BlogView() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [isAuthor, setIsAuthor] = useState(false);

  const navigate = useNavigate();

  const userData = useSelector((state) => state.userData);

  useEffect(() => {
    dataService.getPost(id).then((post) => {
      post && setBlog(post);
      setIsAuthor(post.userId === userData.$id);
    });
  }, [id]);

  const deleteBlog = async () => {
    setDeleting(true);
    try {
      await dataService.deletePost(blog.$id);
      toast("Blog deleted!", {
        position: "top-center",
      });
      navigate("/app");
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
    setDeleting(false);
  };

  return (
    <>
      {blog ? (
        <div className="max-w-4xl mx-auto pb-14">
          <h1 className="text-center text-3xl font-bold pt-4">{blog.title}</h1>
          <div className="extra-info flex flex-wrap gap-x-10 justify-between items-center my-4 mx-14 sm:mx-8">
            <p className="mr-auto">
              {format(new Date(blog.time), "hh:mm a - d MMM, yyyy")}
            </p>
            <cite className="text-lg ml-auto">- By {blog.userName}</cite>
          </div>
          <div
            className="img-div max-w-2xl h-96 sm:h-56 mx-auto overflow-hidden rounded-2xl border-l-8 border-r-8 border-purple-500"
            style={{
              backgroundImage: `linear-gradient(to top left, #02002655, #8324d133 , #02002655), url(${dataService.getPrev(
                blog.image
              )}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
            }}
          >
            <img
              src={dataService.getPrev(blog.image)}
              className="w-full h-full object-contain backdrop-blur"
            />
          </div>
          {isAuthor && (
            <div className="btns flex justify-end gap-6 pt-2 -mb-4  max-w-2xl mx-auto">
              <Button
                className="w-32"
                onClick={() => {
                  navigate("/app/edit-blog/" + blog.$id);
                }}
              >
                Update
              </Button>
              <Button
                className="w-32 from-red-700 to-red-400"
                onClick={deleteBlog}
                isLoading={deleting}
              >
                Delete
              </Button>
            </div>
          )}
          <div className="prose-lg reset-styles overflow-hidden">
            <div className="content my-12">{parse(blog.content)}</div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default BlogView;
