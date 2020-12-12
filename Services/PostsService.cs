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
      return _repo.GetAll()
    }
  }
}