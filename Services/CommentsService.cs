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

    internal Comment GetById(int id)
    {
      var comment = _repo.GetById(id);

      if (comment == null)
      {
        throw new Exception("Invalid id... from PostsService l.27");
      }

      return comment;
    }

    internal Comment CreateComment(Comment newComment)
    {
      newComment.Id = _repo.CreateComment(newComment);
      return newComment;
    }

    internal Comment EditComment(Comment editedComment, string userId)
    {

    }
  }
}