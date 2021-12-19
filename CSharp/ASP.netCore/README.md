# ASP.net core (v6)
Active server pages, now with c#!

## Start
- Program.cs, is the meain entry for your api and server setup
- url matching to actions (controllers)
- define middleware to handle requests (map, use, run)
- 5197, 7006

## Routing
- can be seen in the controllers folder, follows attribute routing to follow accurate restful server data mapping
- [Route("api/[ClassName"])]
- [HttpGet("allProducts")] [HttpGet("product/{"id"}")]
- Params from {id}
- https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/routing?view=aspnetcore-6.0#verb