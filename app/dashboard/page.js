import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function Dashboard() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6 text-center">
        {/* {user?.picture ? (
          <img
            src={user.picture}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full border-4 border-yellow-500"
          />
        ) : (
          <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500 text-2xl">No Image</span>
          </div>
        )} */}
        <h1 className="mt-4 text-2xl font-semibold text-gray-800">
          Welcome to your profile, {user?.given_name || "User"}!
        </h1>
        <p className="mt-2 text-gray-600">
          {user?.email || "No email provided"}
        </p>
        <p className="mt-6 text-sm text-gray-500">
          Thank you for being part of our platform!!!
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
