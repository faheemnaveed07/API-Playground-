async function handler(req: Request) {
  // Open the HTML file (assumes it's in the same folder)
  const file = await Deno.open("./index.html");
  const readableStream = file.readable;

  const headers = new Headers();
  headers.set("Content-Type", "text/html");

  return new Response(readableStream, { headers });
}

Deno.serve({ port: 9000 }, handler);
