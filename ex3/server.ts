async function handler(req: Request) {
  const url = new URL(req.url);

  // API route: /api/v1/ping
  if (url.pathname === "/api/v1/ping") {
    return new Response(JSON.stringify({ message: "pong" }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  // Serve index.html for root or any other path
  const filePath = "./index.html";
  try {
    // Check if file exists
    await Deno.stat(filePath);

    // Open and stream the file
    const file = await Deno.open(filePath);
    const readableStream = file.readable;

    const headers = new Headers();
    headers.set("Content-Type", "text/html");
    return new Response(readableStream, { headers });
  } catch {
    return new Response("File not found: " + filePath, { status: 404 });
  }
}

Deno.serve({ port: 900 }, handler);
