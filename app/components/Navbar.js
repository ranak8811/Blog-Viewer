import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function Navbar() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] w-52 bg-base-100 rounded-box p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Profile</Link>
            </li>
          </ul>
        </div>
        {/* Brand Name */}
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Blog Viewer
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dashboard">Profile</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end space-x-3">
        {/* Authentication Buttons */}
        {(await isAuthenticated()) ? (
          <>
            <span className="hidden lg:inline-block text-sm text-gray-500">
              Welcome, {user?.given_name || "User"}!
            </span>
            <LogoutLink>
              <button className="btn btn-error text-white">Logout</button>
            </LogoutLink>
          </>
        ) : (
          <div className="flex items-center space-x-3">
            <LoginLink postLoginRedirectURL="/dashboard">
              <button className="btn btn-primary">Login</button>
            </LoginLink>
            <RegisterLink postLoginRedirectURL="/dashboard">
              <button className="btn btn-secondary">Register</button>
            </RegisterLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
