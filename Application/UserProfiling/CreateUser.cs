using Domain;
using MediatR;
using Persistence;

namespace Application.UserProfiling
{
    public class CreateUser
    {
        // step 1 create command

        public class Command : IRequest
        {
            // step 2 intialized class  
            public UserProfile userProfile { get; set; }

        }

        //step 3 create Handler and extend IRequestHandler

        public class Handler : IRequestHandler<Command>
        {
            //step4 implement interface

            // step5 generate constrct and initial field
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            // mark this method to async
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.UserProfiles.Add(request.userProfile);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}