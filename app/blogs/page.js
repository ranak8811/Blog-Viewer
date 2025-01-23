import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import React from "react";

async function Blogs() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 mt-6">
      <h1 className="text-3xl font-bold text-center mb-6">All Blog Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="card-body">
              <h2 className="card-title text-lg font-semibold">
                {post.title.length > 50
                  ? `${post.title.substring(0, 50)}...`
                  : post.title}
              </h2>
              <p className="text-sm text-gray-600">
                Post #{post.id} - Click to read more.
              </p>
              <div className="card-actions justify-end">
                <Link
                  href={`/blogs/${post.id}`}
                  className="btn btn-primary btn-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
