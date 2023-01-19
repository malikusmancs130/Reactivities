using AutoMapper;
using MediatR;
using Persistence;

namespace Application.UserProfiling
{
    public class DeleteUser
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;

            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var userProfile = await _context.UserProfiles.FindAsync(request.Id);
                _context.Remove(userProfile);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}