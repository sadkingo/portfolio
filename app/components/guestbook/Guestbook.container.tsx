import React from "react";
import { auth } from "@/auth";

import Guestbook from "./Guestbook.component";
import { Prisma, User } from "@prisma/client";
import { createUser, getUser } from "@/query/UserQuery";
import { getPagedComments } from "@/query/CommentQuery";

async function GuestbookContainer() {
  let currentUser: User | null = null;
  const oAuthUser = await auth();
  if (oAuthUser) {
    const oAuthUserEmail = oAuthUser.user!.email!;
    currentUser = await getUser({ email: oAuthUserEmail });
    if (currentUser === null) {
      currentUser = await createUser(oAuthUser?.user as Prisma.UserCreateInput);
    }
  }

  const comments = await getPagedComments();
  return <Guestbook currentUser={currentUser} comments={comments} />;
}

export default GuestbookContainer;
