using System.Threading.Tasks;
using CLReddit.Models;
using CLReddit.Services;
using CodeWorks.Auth0Provider;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

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

    [HttpPost]
    [Authorize]
    public async Task<ActionResult<Comment>> CreateComment([FromBody] Comment newComment)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        newComment.CreatorId = userInfo.Id;
        Comment created = _cs.CreateComment(newComment);
        created.Creator = userInfo;
        return Ok(created);
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }
  }
}