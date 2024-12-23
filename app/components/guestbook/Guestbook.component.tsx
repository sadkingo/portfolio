import React from "react";
import { signIn, signOut } from "next-auth/react";
import { Icon } from "@iconify/react";

import Button from "../button";
import { Comment, Image, User } from "@prisma/client";
import Comments from "../comments";

interface CommentWithImage extends Comment {
  image: Image;
}
interface Props {
  currentUser: User | null;
  comments: CommentWithImage[] | null;
}

function Guestbook({ currentUser, comments }: Readonly<Props>) {
  return (
    <div className="guestbook flex flex-col items-center justify-center gap-3">
      {currentUser ? renderSignedIn() : renderSignedOut()}
      <Comments comments={comments} />
    </div>
  );
  function renderSignedIn() {
    if (currentUser) {
      return (
        <div className="flex flex-col items-center">
          <span className="text-white text-xl"> Welcome </span>
          <div className="m-auto mb-2 [text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)] dark:text-sky-400 text-xl md:text-2xl leading-snug font-extrabold">
            {currentUser?.name}
          </div>
          <div className="flex gap-3">{renderSignOutBtn()}</div>
        </div>
      );
    }
  }
  function renderSignOutBtn() {
    return (
      <Button
        className="flex h-12 p-3 rounded-md shadow-md bg-amber-500 dark:bg-blue-900"
        clickEvent={signOut}
        text="Sign out"
      >
        <Icon className="h-full w-8" icon="material-symbols:logout" />
      </Button>
    );
  }
  function renderSignedOut() {
    return (
      <Button
        className="flex h-12 w-fit p-3 rounded-md shadow-md bg-amber-500 dark:bg-blue-900"
        clickEvent={signIn}
        text={"Login with github"}
      >
        <Icon className="w-8 h-full" icon="mdi:github" />
      </Button>
    );
  }
}

export default Guestbook;
