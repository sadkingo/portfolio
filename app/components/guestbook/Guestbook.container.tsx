import React from "react";
import { auth } from "@/auth";

import Guestbook from "./Guestbook.component";


async function GuestbookContainer() {
  const currentUser = await auth();
 

  return <Guestbook currentUser={currentUser} />;
}

export default GuestbookContainer;
