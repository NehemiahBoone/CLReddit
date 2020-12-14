using System;
using System.Collections.Generic;
using CLReddit.Models;
using CLReddit.Repositories;

namespace CLReddit.Services
{
  public class CommentsService
  {
    private readonly CommentsRepository _repo;
    private readonly PostsRepository _postRepo;
    public CommentsService(CommentsRepository repo, PostsRepository postRepo)
    {
      _repo = repo;
      _postRepo = postRepo;
    }

    internal IEnumerable<Comment> GetCommentsByPostId(int id)
    {
      var post = _postRepo.GetById(id);

      if (post == null)
      {
        throw new Exception("Invalid Id... from CommentsService l.20");
      }

      return _repo.GetCommentsByPostId(id);
    }
  }
}