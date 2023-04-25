using Application.Activities;
using AutoMapper;
using Domain;
using System.Linq;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Activity, Activity>();
            CreateMap<UserProfile, UserProfile>();
            CreateMap<Activity, ActivityDto>()
            .ForMember(d => d.HostUsername, o => o.MapFrom(s => s.Attendess
            .FirstOrDefault(x => x.IsHost).AppUser.UserName));

            CreateMap<ActivityAttendee, AttendeeDto>()
             .ForMember(d => d.DisplayName, o => o.MapFrom(s => s.AppUser.DisplayName))
             .ForMember(d => d.Username, o => o.MapFrom(s => s.AppUser.UserName))
             .ForMember(d => d.Bio, o => o.MapFrom(s => s.AppUser.Bio))
             .ForMember(d => d.Image, o => o.MapFrom(s => s.AppUser.Photos.FirstOrDefault(s => s.IsMain).Url));

            CreateMap<AppUser, Profiles.Profile>()
            .ForMember(d => d.Image, o => o.MapFrom(s => s.Photos.FirstOrDefault(s => s.IsMain).Url));
        }
    }
}