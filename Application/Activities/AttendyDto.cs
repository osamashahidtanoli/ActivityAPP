namespace Application.Activities
{
    public class AttendyDto
    {
        public string UserName { get; set; }
        public string DisplayName { get; set; }

        public string Bio { get; set; }

        public string Image { get; set; }


        public bool Following { get; set; }

        public int FollowerCount { get; set; }

        public int FollowingCount { get; set; }
    }
}