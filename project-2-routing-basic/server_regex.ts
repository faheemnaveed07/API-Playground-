async function handler(req:Request){
  const productPattern= new URLPattern("/api/products/:id");
  const userPattern=new URLPattern("/api/users/:username");
  const productMatch=productPattern.exec(req.url);
  if(productMatch){
    const productId=productMatch.pathname.groups.id;
    const response={message:`Request Received for product with ID: ${productId}`};
    return new Response(JSON.stringify(response),{headers:{"content-type":"application/json"}});
  }
  const userMatch=userPattern.exec(req.url);
  if(userMatch){
    const username=userMatch.pathname.groups.username;
    const response={message:`Request Received for user with username:${username}`};
    return new Response(JSON.stringify(response),{headers:{"content-type":"application/json"}});
  }
  // Always return a Response
  return new Response(JSON.stringify({message: "Not Found"}), { status: 404, headers: {"content-type":"application/json"} });
}
Deno.serve({handler});