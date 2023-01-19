using Application.UserProfiling;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UserProfileController : BaseApiController
    {
      
      [HttpGet]
      public async Task<ActionResult<List<UserProfile>>> GetAllUser()
      {
         return await Mediator.Send(new UsersProfile.Query());
      }

     [HttpGet("{id}")]
      public async Task<ActionResult<UserProfile>> GetUserById(Guid id)
      {
        return  await Mediator.Send(new UsersProfileByID.Query{Id=id});
      }

      [HttpPost]

      public async Task<IActionResult> AddNewUser (UserProfile userProfile)
      {
        return Ok( await Mediator.Send(new CreateUser.Command{userProfile = userProfile} ));
      }

      [HttpPut("{Id}")]
      public async Task <IActionResult> UpdateUser (Guid Id,UserProfile User)
      {
          User.Id= Id;
            return Ok (await Mediator.Send(new EditUser.Command{userProfile=User}));
      }

    

       [HttpDelete("{id}")]
        public async Task <IActionResult> DeleteUser(Guid id)
        {
            return Ok (await Mediator.Send(new DeleteUser.Command{Id=id}));
        }

    }
}