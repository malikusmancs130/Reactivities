using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class SeedUserProfile
    {
        public static async Task UserProfileData(DataContext context)
        {
            if (context.UserProfiles.Any()) return;

            var userProfile = new List<UserProfile>
            {
                new UserProfile
                {
                    FirstName = "Muhammad",
                    LastName = "Raza",
                    DateOfBirth = DateTime.UtcNow.AddMonths(9),
                    Email = "raza@gmail.com",
                    City = "Lahore"
                },
                new UserProfile
                {
                    FirstName = "Asrar",
                    LastName = "Ali",
                    DateOfBirth = DateTime.UtcNow.AddMonths(2),
                    Email = "Ali@gmail.com",
                    City = "Gujrat"
                },
                new UserProfile
                {
                    FirstName = "Kamran",
                    LastName = "Mudasar",
                    DateOfBirth = DateTime.UtcNow.AddMonths(5),
                    Email = "kami@gmail.com",
                    City = "Islamad"
                },
                new UserProfile
                {
                    FirstName = "Ayesha",
                    LastName = "malik",
                    DateOfBirth = DateTime.UtcNow.AddMonths(1),
                    Email = "malik@gmail.com",
                    City = "Kharain"
                },
                new UserProfile
                {
                    FirstName = "Sulman",
                    LastName = "awan",
                    DateOfBirth = DateTime.UtcNow.AddMonths(7),
                    Email = "awan@gmail.com",
                    City = "London"
                },
                new UserProfile
                {
                    FirstName = "subhan",
                    LastName = "Raza",
                    DateOfBirth = DateTime.UtcNow.AddMonths(6),
                    Email = "sobi@gmail.com",
                    City = "larkana"
                },
                new UserProfile
                {
                    FirstName = "Muhammad",
                    LastName = "Ali",
                    DateOfBirth = DateTime.UtcNow.AddMonths(2),
                    Email = "Activity 2 months ago",
                    City = "London"
                },
                new UserProfile
                {
                    FirstName = "Malik",
                    LastName = "Raza",
                    DateOfBirth = DateTime.UtcNow.AddMonths(7),
                    Email = "Activity 2 months ago",
                    City = "Kharain"
                }
            };

            await context.UserProfiles.AddRangeAsync(userProfile);
            await context.SaveChangesAsync();
        }
    }
}