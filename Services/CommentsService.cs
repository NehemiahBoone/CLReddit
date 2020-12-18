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
        throw new Exception("Invalid id... from CommentsService l.36");
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
      var comment = _repo.GetById(editedComment.Id);
      if (comment == null)
      {
        throw new Exception("Invalid Id... from CommentsService l.52");
      }

      if (comment.CreatorId != userId)
      {
        throw new Exception("UNAUTHORIZED EDIT... from CommentsService l.58");
      }

      editedComment.PostId = editedComment.PostId == 0 ? comment.PostId : editedComment.PostId;
      editedComment.Text = editedComment.Text == null ? comment.Text : editedComment.Text;
      editedComment.Creator = editedComment.Creator == null ? comment.Creator : editedComment.Creator;

      return _repo.EditComment(editedComment);
    }

    internal object DeleteComment(int commentId, string userId)
    {
      Comment comment = _repo.GetById(commentId);
      if (comment == null)
      {
        throw new Exception("Invalid commentId... from CommentsService l.73");
      }

      if (comment.CreatorId != userId)
      {
        throw new Exception("UNAUTHORIZED DELETE... from CommentsService l.78");
      }

      _repo.DeleteComment(commentId);
      return "Successfully deleted Comment... from CommentsService l.82";
    }
  }
}