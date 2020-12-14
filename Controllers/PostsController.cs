using System.Collections.Generic;
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
  public class PostsController : ControllerBase
  {
    private readonly PostsService _ps;
    private readonly CommentsService _cs;
    public PostsController(PostsService ps, CommentsService cs)
    {
      _ps = ps;
      _cs = cs;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Post>> GetAll()
    {
      try
      {
        return Ok(_ps.GetAll());
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    [HttpGet("{id}")]
    public ActionResult<Post> GetById(int id)
    {
      try
      {
        return Ok(_ps.GetById(id));
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    [HttpGet("{id}/comments")]
    public ActionResult<IEnumerable<Comment>> GetCommentsByPostId(int id)
    {
      try
      {
        return Ok(_cs.GetCommentsByPostId(id));
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    [HttpPost]
    [Authorize]
    public async Task<ActionResult<Post>> CreatePost([FromBody] Post newPost)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        newPost.CreatorId = userInfo.Id;
        Post created = _ps.CreatePost(newPost);
        created.Creator = userInfo;
        return Ok(created);
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<string>> DeletePost(int id)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        return Ok(_ps.DeletePost(id, userInfo.Id));
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }
  }
}