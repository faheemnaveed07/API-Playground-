async function handler(req: Request) {
  const url = new URL(req.url);
  const path = url.pathname;
  console.log("Request Received from path:", path);
  //1. homepage
  if (path === "/") {
    return new Response("Welcome to the Home Page!", { headers: { "content-type": "text/plain" } });
  }
  //2. about page
  else if (path === "/about") {
    return new Response("Welcome to the About Page!", { headers: { "content-type": "text/plain" } });
  }
  //3. contact page
  else if (path === "/contact") {
    return new Response("Welcome to the Contact Page!", { headers: { "content-type": "text/plain" } });
  }
  //4. not found
  return new Response("Not found", { headers: { "content-type": "text/plain" }, status: 404 });
}

Deno.serve({ handler });