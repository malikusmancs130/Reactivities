using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain;

namespace Application.UserProfiling
{
    public class UsersProfile
    {
        public class Query : IRequest<List<UserProfile>> { }

        public class Handler : IRequestHandler<Query, List<UserProfile>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<UserProfile>> Handle(Query request, CancellationToken cancellationToken)
            {
               return await _context.UserProfiles.ToListAsync();
            }
            
        }
    }
}    
    