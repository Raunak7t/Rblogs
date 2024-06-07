import React, { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import dataService from "../appwrite/data";
import { format } from "date-fns";

function PostCard({ post }) {
  const { $id, image, title, userName, time, status } = post;

  const date = format(new Date(time), "d MMM");

  const cardRef = useRef();
  const [cardHeight, setCardHeight] = useState(0);
  useEffect(() => {
    setCardHeight(cardRef.current.getBoundingClientRect().height);
  }, [cardRef]);

  return (
    <Link
      to={`/app/blog-view/${$id}`}
      className=" bg-slate-800 hover:bg-slate-700 w-96 min-h-32 rounded-lg overflow-hidden flex relative"
      ref={cardRef}
    >
      {status === "Inactive" && (
        <div className="absolute bg-slate-900/50 w-full h-full z-10 flex justify-center items-center font-bold text-4xl text-white/70 backdrop-blur-sm">
          IN-ACTIVE
        </div>
      )}
      <div className=" w-1/2" style={{ height: cardHeight }}>
        <img
          src={dataService.getPrev(image)}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-3/5 p-3 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <FaUserCircle className=" text-xl" /> <span>{userName}</span>
        </div>
        <small className=" self-end -mt-2 opacity-80">{date}</small>
        <h1 className="text-xl font-semibold px-2">{title}</h1>
      </div>
    </Link>
  );
}

export default PostCard;
