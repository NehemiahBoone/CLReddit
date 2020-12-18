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

    [HttpGet("{id}")]
    public ActionResult<Comment> GetById(int id)
    {
      try
      {
        return Ok(_cs.GetById(id));
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
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

    [HttpPut("{id}")]
    [Authorize]
    public async Task<ActionResult<Comment>> EditComment(int id, [FromBody] Comment editedComment)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        editedComment.Creator = userInfo;
        editedComment.Id = id;

        return Ok(_cs.EditComment(editedComment, userInfo.Id));
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<string>> DeleteComment(int id)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        return Ok(_cs.DeleteComment(id, userInfo.Id));
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }
  }
}