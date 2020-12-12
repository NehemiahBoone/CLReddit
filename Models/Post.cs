namespace CLReddit.Models
{
  public class Post
  {
    public int Id { get; set; }
    public string CreatorId { get; set; }
    public string Title { get; set; }
    public string Text { get; set; }
    public int Upvotes { get; set; }
    public int Downvotes { get; set; }
  }
}