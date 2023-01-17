using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class UserProfileController : BaseApiController
    {
        private readonly DataContext _context;
        public UserProfileController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
      public async Task<ActionResult<List<UserProfile>>> GetAllUser()
      {
        return await _context.UserProfiles.ToListAsync();
      }

     [HttpGet("{id}")]
      public async Task<ActionResult<UserProfile>> GetUserById(Guid id)
      {
        return await _context.UserProfiles.FindAsync(id);
      }

        // [HttpGet("FirstName")]

        // public async Task<ActionResult<UserProfile>> GetUserByName(string FirstName)
        // {
        //     return await _context.UserProfiles.FindAsync(FirstName);
        // }
    }
}