async function handler(req:Request)
{
  const method=req.method;
  const url=req.url;
  const json={url,method}
  const jsonString=JSON.stringify(json)
  return new Response(jsonString,{
    headers:{
      "Content-type":"application/json"
    }
  });

}
Deno.serve({port:9000},handler)