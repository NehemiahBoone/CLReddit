using System;
using System.Collections.Generic;
using CLReddit.Models;
using CLReddit.Repositories;

namespace CLReddit.Services
{
  public class PostsService
  {
    private readonly PostsRepository _repo;
    public PostsService(PostsRepository pr)
    {
      _repo = pr;
    }

    internal IEnumerable<Post> GetAll()
    {
      return _repo.GetAll();
    }

    internal Post GetById(int id)
    {
      var post = _repo.GetById(id);

      if (post == null)
      {
        throw new Exception("Invalid id... from PostsService l.27");
      }

      return post;
    }

    internal Post CreatePost(Post newPost)
    {
      newPost.Id = _repo.CreatePost(newPost);
      return newPost;
    }

    internal object DeletePost(int postId, string userId)
    {
      Post post = _repo.GetById(postId);
      if (post == null)
      {
        throw new Exception("Invalid id... from PostsService l.44");
      }

      if (post.CreatorId != userId)
      {
        throw new Exception("UNAUTHORIZED... from PostsService l.49");
      }

      _repo.DeletePost(postId);
      return "Successfully deleted post... from PostsService l.53";
    }
  }
}