# React Notes

1- 
   For creating project with typescipt template we will turn on the flag 
   npx create-react-app client-app --use-npm --template typescript

2- for launching app
   For start app : npm start 

    Use Axios for calling backend api.

 # CORS Policy

 go to Program.cs file. 

 decalre core policy :

 builder.Services.AddCors(opt =>
{
    opt.AddPolicy("CorePolicy", policy =>
    {
        policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
    });
});

and then 

Add that policy in middleware on top. because we need core access first.
