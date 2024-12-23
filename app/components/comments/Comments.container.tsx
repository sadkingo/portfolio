import React from "react";
import Comments from "./Comments.component";
import { auth } from "@/auth";

async function CommentsContainer({ comments }) {
  const currentUser = await auth();
  return <Comments comments={comments} currentUser={currentUser} />;
}

export default CommentsContainer;
