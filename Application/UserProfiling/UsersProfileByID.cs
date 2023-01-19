using Domain;
using MediatR;
using Persistence;

namespace Application.UserProfiling
{
    public class UsersProfileByID
    {
         public class Query : IRequest<UserProfile>
        {
            public Guid Id { get; set; }
        }

         public class Handler : IRequestHandler<Query, UserProfile>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<UserProfile> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.UserProfiles.FindAsync(request.Id);
            }
        }
    }
}