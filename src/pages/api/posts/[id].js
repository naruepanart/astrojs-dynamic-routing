import { fetchWithTimeout } from "../../../utility/fetchWithTimeout";

export async function get({ params }) {
  const res = await fetchWithTimeout(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return new Response(JSON.stringify(post), {
    status: 200,
  });
}
