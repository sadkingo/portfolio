"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import SignModal from "../sign-modal";
import { Comment, Image } from "@prisma/client";

interface CommentWithImage extends Comment {
  image: Image;
}
const Comments = ({ comments, currentUser }) => {
  const [currentComments, setCurrentComments] = useState<
    CommentWithImage[] | null
  >(comments);

  return (
    <>
      {currentUser ? <SignModal setCurrentComments={setCurrentComments} /> : ""}
      {renderComments()}
    </>
  );
  function renderComments() {
    return (
      <div className="grid lg:grid-cols-2 w-full">
        {currentComments?.map((comment) => (
          <React.Fragment key={comment.id}>
            <div className="comment flex flex-col items-center p-4 border border-white m-4 rounded-lg bg-amber-600 dark:bg-blue-900">
              {renderRating(comment.rating)}
              <div className="flex w-full flex-col items-center justify-between">
                <div className="text-center text-lg">{comment.content}</div>
                <img
                  className="signature w-1/2 h-32"
                  src={comment.image.url}
                  alt="signature"
                />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }
  function renderRating(rating = 0) {
    const maxStars = 5;
    const fullStarClass = "mask mask-star-2 bg-amber-400 w-8 h-8";
    const emptyStarClass = "mask mask-star-2 bg-amber-400/40 w-8 h-8";
    return (
      <div className="rating flex mb-3">
        {Array.from({ length: maxStars }).map((_, i) => (
          <div
            key={i}
            className={i < rating ? fullStarClass : emptyStarClass}
          ></div>
        ))}
      </div>
    );
  }
};

export default Comments;
