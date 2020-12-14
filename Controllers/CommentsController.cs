namespace CLReddit.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class CommentsContoller : ControllerBase
  {
    private readonly CommentsService _cs;

    public CommentsContoller(CommentsService cs)
    {
      _cs = cs;
    }

    
  }
}