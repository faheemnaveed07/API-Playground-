  async function handler(req:Request){
    // console.log(req.method);
    // console.log(req.headers);
    const file=await Deno.open('./index.html');
    const fileStream=file.readable;
    const htmlHeader=new Headers();
    htmlHeader.append('content-type','text/html');
return new Response(fileStream,{
  headers:htmlHeader
});
}
Deno.serve({port:800,hostname:'127.0.0.1'},handler)