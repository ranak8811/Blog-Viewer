import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

async function ProfileLayout({ children }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/api/auth/login"); // Redirect to the home page if the user is not authenticated
  }

  return <div>{children}</div>;
}

export default ProfileLayout;
