import getAllPosts from "@/lib/getAllPosts";
import getPost from "@/lib/getPost";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

async function BlogDetails({ params }) {
  const { id } = await params;

  const post = await getPost(id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Blog Post Details
        </h1>
        <h2 className="text-xl font-semibold text-yellow-500 mb-4">
          {post.title}
        </h2>
        <p className="text-gray-700 leading-relaxed border-l-4 border-yellow-500 pl-4">
          {post.body}
        </p>
      </div>
    </div>
  );
}

export default BlogDetails;

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
