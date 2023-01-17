# C#
1- Create class

object relational mapper is used to mapped to map model class with entity class in EF.

# Database

DbContext or DataContext in our case, we create DB set and these represent the table that we create.

 ----public DbSet<Activity> Activities { get; set; } 
 herer, activities will be table creats in database.

 we need 2 packages from Nuget 1- EF and 2nd- Microsoft.EntityFrameworkCore.Design lets installed them.

 once all set => dotnet ef migrations add InitialCreate -s API -p Persistence 

 here -s is Start of project and -p is in which project we want to add migration.