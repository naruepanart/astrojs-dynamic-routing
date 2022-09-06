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

export async function post({ request }) {
  const data = await request.json();

  const saveToDB = {
    name: data.name,
  };

  const response = await fetchWithTimeout(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",
      body: JSON.stringify(saveToDB),
    }
  );
  const responseData = await response.json();

  return new Response(JSON.stringify(responseData), { status: 201 });
}
