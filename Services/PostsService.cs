namespace CLReddit.Services
{
  public class PostsService
  {
    private readonly PostsRepository _repo;
    public PostsService(PostsRepository pr)
    {
      _repo = pr;
    }
  }
}