async function handler(req:Request){
  const url=new URL(req.url);
  const path=url.pathname;
  console.log("Request Received from path:", path);
  switch(path)
  {
    case"/":
    return new Response("Welcome to the Home Page!",{headers:{"content-type":"text/plain"}});
    case "/about":
      return new Response("Welcome to the About Page!",{headers:{"content-type":"text/plain"}});
      case "/contact":
        return new Response("Welcome to the Contact Page!",{headers:{"content-type":"text/plain"}});
        case "/api/products":{
          const products=[
            {id:1,name:"Laptop",price:1000},
            {id:2,name:"Smartphone",price:500},
            {id:3,name:"Tablet",price:300}
          ];
          return new Response(JSON.stringify(products),{headers:{"content-type":"application/json"}});}
          case "/api/users":{
            const users=[
              {id:1,name:"Faheem",email:"example@gmail.com"},
              {id:2,name:"Qamar",email:"example1@gmail.com"}
            ];
            return new Response(JSON.stringify(users),{headers:{"content-types":"application/json"}});}
          default:
            return new Response("Not found",{headers:{"content-type":"text/plain"},status:404});
  }
}
// deno-lint-ignore no-unreachable
Deno.serve({handler});