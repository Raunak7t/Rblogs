import React, { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
// import dataService from "../appwrite/data";

function PostCard({ $id, slug, userName, title, image }) {
  const cardRef = useRef();
  const [cardHeight, setCardHeight] = useState(0);
  useEffect(() => {
    setCardHeight(cardRef.current.getBoundingClientRect().height);
  }, [cardRef]);

  return (
    <Link
      to={`/app/Blogview/${$id}`}
      className=" bg-slate-800 hover:bg-slate-700 w-96 rounded-lg overflow-hidden flex "
      ref={cardRef}
    >
      <div className=" w-1/2" style={{ height: cardHeight }}>
        <img
          // src={dataService.getPrev(image)}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-3/5 p-3 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <FaUserCircle className=" text-xl" /> <span>{userName}</span>
        </div>
        <h1 className="text-xl font-semibold px-2">{title}</h1>
      </div>
    </Link>
  );
}

export default PostCard;
