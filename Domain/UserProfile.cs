namespace Domain
{
    public class UserProfile
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
        public DateTime DateOfBirth { get; set; }
        
    }
}