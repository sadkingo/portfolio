import React from "react";
import Button from "../button";
import { signIn, signOut } from "next-auth/react";
import { Icon } from "@iconify/react";

async function Guestbook({ currentUser }) {
  return (
    <div className="guestbook">{currentUser ? renderSignOutButton() : renderLoginButton()}</div>
  );

  function renderLoginButton() {
    return (
      <Button
        className="flex h-12 p-3 rounded-md shadow-md bg-amber-500 dark:bg-blue-900"
        clickEvent={signIn}
        text={"Login with github"}
      >
        <Icon className="w-8 h-full" icon="mdi:github" />
      </Button>
    );
  }
  function renderSignOutButton() {
    if (currentUser) {
      return (
        <div>
          Welcome {currentUser.user?.name}
          <Button
            className="flex h-12 p-3 rounded-md shadow-md bg-amber-500 dark:bg-blue-900"
            clickEvent={signOut}
            text="Sign out"
          ></Button>
        </div>
      );
    }
  }
}

export default Guestbook;
