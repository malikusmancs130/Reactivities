using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.UserProfiling
{
    public class EditUser
    {
        public class Command : IRequest
        {
            public UserProfile userProfile { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly IMapper _mapper;
            private readonly DataContext _context;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var updateUser = await _context.UserProfiles.FindAsync(request.userProfile.Id);
                _mapper.Map(request.userProfile, updateUser);

                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}