export default async function getAllPosts() {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  if (!result.ok) {
    throw new Error("There was an error fetching the posts");
  }

  return result.json();
}
