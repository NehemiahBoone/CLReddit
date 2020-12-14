using System;
using CLReddit.Repositories;

namespace CLReddit.Services
{
  public class CommentsService
  {
    private readonly CommentsRepository _repo;
    public CommentsService(CommentsRepository repo)
    {
      _repo = repo;
    }

    internal object GetCommentsByPostId(int id)
    {
      throw new NotImplementedException();
    }
  }
}