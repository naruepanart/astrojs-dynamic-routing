import { fetchWithTimeout } from "../../../utility/fetchWithTimeout";

export async function get() {
  const res = await fetchWithTimeout(
    `https://jsonplaceholder.typicode.com/posts`
  );
  const post = await res.json();

  return new Response(JSON.stringify(post), {
    status: 200,
  });
}
