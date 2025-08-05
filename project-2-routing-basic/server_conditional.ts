async function handler(req:Request)
{
  const url=new URL(req.url);
  console.log(req.url);
  console.log(url);
  if(url.pathname==="/py")
  {
    return new Response("Welcome to the IT Zone!", {
      headers: {
        "content-type": "text/plain",
      },
    });
  }
  else
  {
return new Response("Not found", { status: 404, headers: { "content-type": "text/plain" } });
  }
}
Deno.serve({ handler });